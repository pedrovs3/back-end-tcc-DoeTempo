import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createNgoBody from '../schemas/ngoBodyZodSchema';
import hashPassword from '../utils/bcryptjs/hashPassword';
import createNgoBodyToUpdate from '../schemas/ngoBodyUpdateZodSchema';

class NgoController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const ngos = await prisma.nGO.findMany();

      reply.status(200)
        .send({ ngos });
    } catch (e) {
      reply.status(400)
        .send(e);
    }
  }

  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const ngoSchema = createNgoBody.parse(request.body);
      const newPassword = await hashPassword(ngoSchema.password);

      const ngoCreate = await prisma.nGO.create({
        data: {
          cnpj: ngoSchema.cnpj,
          email: ngoSchema.email,
          name: ngoSchema.name,
          foundation_date: ngoSchema.foundation_date,
          tbl_ngo_address: {
            create: {
              tbl_address: {
                create: {
                  number: ngoSchema.address.number,
                  postal_code: ngoSchema.address.postal_code,
                  complement: ngoSchema.address.complement || null,
                },
              },
            },
          },
          password: newPassword,
        },
      });

      reply.status(201)
        .send({
          message: 'Created with success',
          payload: ngoCreate,
        });
    } catch (e) {
      reply.status(400)
        .send(e);
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;
      const ngoSchema = createNgoBodyToUpdate.parse(request.body);
      const newPassword = await hashPassword(ngoSchema.password);

      const ngoUpdate = await prisma.nGO.update({
        where: {
          id,
        },
        data: {
          email: ngoSchema.email,
          foundation_date: ngoSchema.foundation_date,
          description: ngoSchema.description,
          tbl_ngo_address: {
            update: {
              where: {
                id_ngo: id,
              },
              data: {
                tbl_address: {
                  update: {
                    number: ngoSchema.address.number,
                    postal_code: ngoSchema.address.postal_code,
                    complement: ngoSchema.address.complement,
                  },
                },
              },
            },
          },
          password: newPassword,
        },
      });

      reply.status(200)
        .send({ ngoUpdate });
    } catch (e) {
      reply.status(400)
        .send({ errors: ['Não foi possivel atualizar o cadastro da ONG', e] });
    }
  }
}

export default new NgoController();
