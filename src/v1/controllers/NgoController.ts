import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createNgoBody from '../schemas/ngoBodyZodSchema';
import hashPassword from '../utils/bcryptjs/hashPassword';
import createNgoBodyToUpdate from '../schemas/ngoBodyUpdateZodSchema';

class NgoController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const ngos = await prisma.nGO.findMany();

      if (!ngos) {
        reply.status(200).send({ message: 'Não há ong`s registradas!' });
        return;
      }

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
          tbl_type: {
            connect: {
              name: 'ONG',
            },
          },
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
          photoURL: ngoSchema.photoURL || undefined,
        },
      });

      if (!ngoCreate.id) {
        reply.status(400).send({ errors: ['Houve um erro ao registrar a ong.', ngoCreate] });
      }

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
              tbl_address: {
                update: {
                  number: ngoSchema.address.number,
                  complement: ngoSchema.address.complement || undefined,
                  postal_code: ngoSchema.address.postal_code,
                },
              },
            },
          },
          password: newPassword,
          photoURL: ngoSchema.photoURL || undefined,
        },
      });

      if (!ngoUpdate.id) {
        reply.status(400).send({
          errors: ['Não foi possivel atualizar o registro de ong.', ngoUpdate],
        });
        return;
      }

      reply.status(200)
        .send({ ngoUpdate });
    } catch (e) {
      reply.status(400)
        .send({ errors: ['Não foi possivel atualizar o cadastro da ONG', e] });
    }
  }

  async show(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id } = request.params;

      const ngo = await prisma.nGO.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          tbl_ngo_address: {
            select: {
              tbl_address: {
                select: {
                  id: true,
                  complement: true,
                  postal_code: true,
                  number: true,
                },
              },
            },
          },
          tbl_ngo_causes: {
            select: {
              tbl_causes: {
                select: {
                  title: true,
                  id: true,
                },
              },
            },
          },
          email: true,
          name: true,
          password: true,
          foundation_date: true,
          tbl_type: {
            select: {
              name: true,
            },
          },
          cnpj: true,
          tbl_campaign: {
            select: {
              title: true,
              id: true,
            },
          },
          description: true,
          tbl_following: {
            select: {
              id: true,
            },
          },
          tbl_ngo_phone: {
            select: {
              tbl_phone: {
                select: {
                  number: true,
                },
              },
            },
          },
        },
      });

      if (!ngo) {
        reply.status(400).send({ message: 'Não foram encontradas ongs com esse registro!.' });
      }

      reply.status(200).send(ngo);
    } catch (e) {
      reply.status(500).send({ errors: [e] });
    }
  }

  async delete(request:FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id } = request.params;

      if (!id) {
        reply.status(400).send({ errors: ['ID missing in request.'] });
        return;
      }

      await prisma.nGO.delete({
        where: {
          id,
        },
      });

      reply.status(200).send({ message: 'Deleted with success!' });
    } catch (e) {
      console.log(e);
      reply.status(500).send({ errors: [e] });
    }
  }
}

export default new NgoController();
