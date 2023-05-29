import { FastifyReply, FastifyRequest } from 'fastify';
import { PostLikes } from '@prisma/client';
import { genericError } from '../errors/GenericError';
import { prisma } from '../lib/prisma';

class LikeController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      let like: PostLikes;
      const { params } = request;
      // Id post
      const { id } = params;
      const decodedJwt = request.user;

      if (!id) {
        return reply.status(400).send(new genericError('Dados insuficientes para concluir a requisição'));
      }

      if (decodedJwt.type === 'USER') {
        const user = await prisma.postLikes.findUnique({
          where: {
            id_user_id_post: {
              id_user: decodedJwt.id,
              id_post: id,
            },
          },
        });

        if (user) {
          await prisma.postLikes.delete({
            where: {
              // @ts-ignore
              id_user_id_post: {
                id_user: decodedJwt.id,
                id_post: id,
              },
            },
          });
        } else {
          like = await prisma.postLikes.create({
            data: {
              user: {
                connect: {
                  id: decodedJwt.id,
                },
              },
              post: {
                connect: {
                  id,
                },
              },
            },
          });
        }
      } else {
        const ngo = await prisma.postLikes.findUnique({
          where: {
            id_ngo_id_post: {
              id_ngo: decodedJwt.id,
              id_post: id,
            },
          },
        });

        if (ngo) {
          await prisma.postLikes.delete({
            where: {
              // @ts-ignore
              id_ngo_id_post: {
                id_ngo: decodedJwt.id,
                id_post: id,
              },
            },
          });
        } else {
          like = await prisma.postLikes.create({
            data: {
              ngo: {
                connect: {
                  id: decodedJwt.id,
                },
              },
              post: {
                connect: {
                  id,
                },
              },
            },
          });
        }
      }

      reply.status(200).send({ liked: true, like });
    } catch (e) {
      console.log(e);
      reply.status(400).send(new genericError('Não foi possivel concluir a requisição'));
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { params } = request;
      const decodedJwt = request.user;

      if (decodedJwt.type === 'ONG') {
        await prisma.postLikes.delete({
          where: {
            // @ts-ignore
            id_ngo_id_post: {
              id_ngo: decodedJwt.id,
              id_post: params.id,
            },
          },
        });
      } else if (decodedJwt.type === 'USER') {
        await prisma.postLikes.delete({
          where: {
            // @ts-ignore
            id_user_id_post: {
              id_user: decodedJwt.id,
              id_post: params.id,
            },
          },
        });
      }

      reply.status(200).send({ disliked: true });
    } catch (e) {
      console.log(e);
      reply.status(400).send(new genericError('Não foi possivel concluir a requisição'));
    }
  }
}

export default new LikeController();
