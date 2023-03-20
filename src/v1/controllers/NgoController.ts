import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createNgoBody from '../schemas/ngoBodyZodSchema';
import hashPassword from '../utils/bcryptjs/hashPassword';

class NgoController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const ngos = await prisma.nGO.findMany({
        include: {
          tbl_ngo_address: {
            select: {
              tbl_address: true,
            },
          },
          tbl_ngo_causes: {
            select: {
              tbl_causes: {
                select: {
                  title: true,
                },
              },
            },
          },
        },
      });

      console.log(ngos);
      reply.send({ ngos });
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
              id: 'b2a70be9-175c-4b09-8339-b8d76748e6cf',
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
        },
      });

      console.log(ngoCreate);
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

      reply.status(200).send(ngo);
    } catch (e) {
      reply.status(500).send({ errors: [e] });
    }
  }
}

export default new NgoController();
