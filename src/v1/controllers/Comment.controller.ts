import { FastifyReply, FastifyRequest } from 'fastify';
import { genericError } from '../errors/GenericError';
import FindAllCommentsUseCase from '../domain/useCases/comment/find.all.comments.use.case';
import { genericError500 } from '../errors/GenericError500';
import { prisma } from '../lib/prisma';

class CommentController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { params } = request;

      if (!params) {
        reply.status(400).send(new genericError('Não foram enviados os dados necessários!'));
      }
      // @ts-ignore
      const allComments = await new FindAllCommentsUseCase().execute(params.id);

      if (typeof allComments === 'string' && allComments.includes('servidores')) {
        return reply.status(500).send(new genericError500(allComments));
      }
      if (typeof allComments === 'string') {
        return reply.status(400).send(new genericError(allComments));
      }

      reply.status(200).send({ comments: allComments });
    } catch (e) {
      reply.status(400).send(new genericError('Não foi possivel concluir a requisição, confira os dados e tente novamente!'));
    }
  }

  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { body, params } = request;
      const decodedJwt = request.user;

      if (decodedJwt.type === 'USER') {
        const createComment = await prisma.comment.create({
          data: {
            id_post: params.id,
            comment_user: {
              create: {
                user: {
                  connect: {
                    id: decodedJwt.id,
                  },
                },
              },
            },
            content: body.content,
          },
        });

        reply.status(200).send({ createComment });
      }

      if (decodedJwt.type === 'ONG') {
        const createComment = await prisma.comment.create({
          data: {
            id_post: params.id,
            comment_ngo: {
              connect: {
                id: decodedJwt.id,
              },
            },
            content: body.content,
          },
        });

        if (!createComment) {
          return reply.status(400).send(new genericError('Não foi possivel criar o comentário!'));
        }

        reply.status(200).send({ createComment });
      }
    } catch (e) {
      console.log(e);
      reply.status(400).send('Houve um erro');
    }
  }
}

export default new CommentController();
