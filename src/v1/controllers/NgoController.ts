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
}

export default new NgoController();
