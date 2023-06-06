import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { genericError } from '../errors/GenericError';
import { mongo, prisma } from '../lib/prisma';
import { mailgun } from '../lib/mailgun';
import hashPassword from '../utils/hashPassword';
import { MAILGUN_DOMAIN } from '../lib/env';

// eslint-disable-next-line @typescript-eslint/no-var-requires

export async function recoverRoutes(fastify: FastifyInstance) {
  fastify.post('/account/', async (request:FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { email } = request.body;
    if (!email) {
      return reply.status(400).send(new genericError('Não foi enviado email!'));
    }

    // Gera o código randomico para recup. de contas
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      // Guardar o código no MongoDb
      await mongo.users.upsert({
        where: { email },
        update: { verificationCode },
        create: { email, verificationCode },
      });

      const emailToSend = {
        from: 'nao-responda@AMPI.org.br <nao-responda@AMPI.org.br>',
        to: email,
        subject: 'Recuperação de conta',
        text: `Seu código de verificação é:${verificationCode}`,
        html: `<html lang="pt-br"><span>Seu código de verificação é:</span><h1 style="color: #32CD32">${verificationCode}</h1></html>`,
      };

      await mailgun.messages.create(MAILGUN_DOMAIN as string, emailToSend)
        .then((response: any) => {
          console.log('E-mail enviado com sucesso:', response);
        })
        .catch((error: any) => {
          console.error('Erro ao enviar e-mail:', error);
          throw new Error();
        });

      reply.status(200).send({ message: 'Código de verificação enviado com sucesso' });
    } catch (e) {
      console.error('Erro ao enviar código de verificação:', e);
      reply.status(500).send({ error: 'Erro ao enviar código de verificação' });
    }
  });

  fastify.post('/account/verify', async (request:FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { email, verificationCode } = request.body;

    try {
      const user = await mongo.users.findFirst({
        where: {
          email,
          verificationCode,
        },
      });

      if (user) {
        const dataUser = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            name: true,
            type: {
              select: {
                name: true,
              },
            },
            password: true,
            email: true,
          },
        }) || await prisma.nGO.findFirst({
          where: {
            email,
          },
          select: {
            id: true,
            name: true,
            type: {
              select: {
                name: true,
              },
            },
            password: true,
            email: true,
          },
        });

        const type = dataUser?.type.name;
        // @ts-ignore
        const { id } = dataUser;

        const token = fastify.jwt.sign(
          {
            id,
            email,
            type,
          },
          {
            expiresIn: process.env.TOKEN_EXPIRATION,
          },
        );

        return reply.status(200).send({ message: 'Código válido!', token });
      }
      reply.status(400).send({ error: 'Código de verificação inválido' });
    } catch (e) {
      console.error('Erro ao verificar código de verificação:', e);
      reply.status(500).send({ error: 'Erro ao verificar código de verificação' });
    }
  });

  fastify.put('/password', { preValidation: fastify.authenticate }, async (request: FastifyRequest, reply:FastifyReply) => {
    const decodeJwt = request.user;
    // @ts-ignore
    const { type, email }: {type:string; email: string} = decodeJwt;
    // @ts-ignore
    const { password } = request.body;
    const newPassword = await hashPassword(password);
    let updated;

    try {
      if (type === 'USER') {
        updated = await prisma.user.update({
          where: {
            email,
          },
          data: {
            password: newPassword,
          },
        });
      } else {
        updated = await prisma.nGO.update({
          where: {
            email,
          },
          data: {
            password: newPassword,
          },
        });
      }

      // @ts-ignore
      if (updated?.id) {
        return reply.status(200).send({ message: 'Senha atualizada com sucesso!' });
      }
      reply.status(400).send(new genericError('Houve algum erro ao atualizar a senha!'));
    } catch (e) {
      console.log('atualizar senha', e);
      reply.status(500).send('Erro ao atualizar a senha do usuário!');
    }
  });
}
