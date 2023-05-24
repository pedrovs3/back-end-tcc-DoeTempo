import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import createNgoBody from '../schemas/ngoBodyZodSchema';
import hashPassword from '../utils/hashPassword';
import createNgoBodyToUpdate from '../schemas/ngoBodyUpdateZodSchema';
import ngoRepository from '../domain/repositories/Ngo.repository';

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

      const ngoCreate = await ngoRepository.createNgo(<ngoSchemaTypes>ngoSchema, newPassword);

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
      let ngoUpdate;

      if (ngoSchema.attached_link) {
        ngoUpdate = await prisma.nGO.update({
          where: {
            id,
          },
          data: {
            email: ngoSchema.email,
            // @ts-ignore
            attached_link: {
              deleteMany: {
                id_ngo: id,
              },
              createMany: {
                skipDuplicates: true,
                // eslint-disable-next-line max-len
                data: ngoSchema.attached_link
                  .map((link) => ({
                    attached_link: link.link,
                    id_source: link.source,
                  })) || undefined,
              },
            },
            banner_photo: ngoSchema.banner_photo || undefined,
            foundation_date: ngoSchema.foundation_date,
            description: ngoSchema.description || undefined,
            ngo_address: {
              update: {
                address: {
                  update: {
                    number: ngoSchema.address.number,
                    complement: ngoSchema.address.complement || undefined,
                    postal_code: ngoSchema.address.postal_code,
                  },
                },
              },
            },
            password: newPassword,
            photo_url: ngoSchema.photo_url || undefined,
          },
        });
      } else {
        ngoUpdate = await prisma.nGO.update({
          where: {
            id,
          },
          data: {
            email: ngoSchema.email,
            // @ts-ignore
            banner_photo: ngoSchema.banner_photo || undefined,
            foundation_date: ngoSchema.foundation_date,
            description: ngoSchema.description || undefined,
            ngo_address: {
              update: {
                address: {
                  update: {
                    number: ngoSchema.address.number,
                    complement: ngoSchema.address.complement || undefined,
                    postal_code: ngoSchema.address.postal_code,
                  },
                },
              },
            },
            password: newPassword,
            photo_url: ngoSchema.photo_url || undefined,
          },
        });
      }

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
          photo_url: true,
          created_at: true,
          attached_link: {
            select: {
              id: true,
              attached_link: true,
              source: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          banner_photo: true,
          post_ngo: {
            select: {
              post: {
                include: {
                  post_photo: true,
                  post_likes: true,
                  comment: {
                    include: {
                      comment_likes: true,
                      comment_ngo: true,
                      comment_user: true,
                      _count: true,
                    },
                  },
                },
              },
            },
          },
          ngo_address: {
            select: {
              address: {
                select: {
                  id: true,
                  complement: true,
                  postal_code: true,
                  number: true,
                },
              },
            },
          },
          ngo_causes: {
            select: {
              causes: {
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
          type: {
            select: {
              name: true,
            },
          },
          cnpj: true,
          campaign: {
            select: {
              title: true,
              id: true,
              description: true,
              is_active: true,
              campaign_photos: {
                select: {
                  photo_url: true,
                },
              },
            },
          },
          description: true,
          following: {
            select: {
              id: true,
            },
          },
          ngo_phone: {
            select: {
              phone: {
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
