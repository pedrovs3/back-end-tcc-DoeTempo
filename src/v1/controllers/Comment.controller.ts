import { FastifyReply, FastifyRequest } from 'fastify';
import { genericError } from '../errors/GenericError';
import FindAllCommentsUseCase from '../domain/useCases/comment/find.all.comments.use.case';
import { genericError500 } from '../errors/GenericError500';
import { prisma } from '../lib/prisma';
import { unauthorizedError } from '../errors/UnauthorizedError';

class CommentController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { params } = request;

      // @ts-ignore
      if (!params.id) {
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
            post: {
              connect: {
                id: params.id,
              },
            },
            comment_ngo: {
              create: {
                ngo: {
                  connect: {
                    id: decodedJwt.id,
                  },
                },
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

  async deleteComment(request: FastifyRequest, reply: FastifyReply) {
    try {
      let idCreatorComment : string;
      let idCreatorPost: string;
      const decodedJwt = request.user;
      const { commentId } = request.params;

      const comment = await prisma.comment.findUnique({
        where: {
          id: commentId,
        },
        include: {
          comment_user: true,
          comment_ngo: true,
          post: {
            include: {
              _count: {
                select: {
                  post_ngo: true,
                  post_user: true,
                },
              },
              post_user: true,
              post_ngo: true,
            },
          },
          _count: true,
        },
      });

      if (comment === null) {
        return reply.status(400).send(new genericError('Essa campanha nao existe!'));
      }

      if (comment) {
        if (comment._count.comment_ngo === 1) {
          idCreatorComment = comment.comment_ngo[0].id_ngo;
          if (comment.post._count.post_user === 1) {
            idCreatorPost = comment.post.post_user[0].id_user;
          } else {
            idCreatorPost = comment.post.post_ngo[0].id_ngo;
          }
        } else {
          idCreatorComment = comment.comment_user[0].id_user;
          if (comment.post._count.post_user === 1) {
            idCreatorPost = comment.post.post_user[0].id_user;
          } else {
            idCreatorPost = comment.post.post_ngo[0].id_ngo;
          }
        }
      }

      if (idCreatorComment !== decodedJwt.id && idCreatorPost !== decodedJwt.id) {
        return reply.status(401).send(new unauthorizedError('Você nao tem permissão para fazer isso!'));
      }
      const commentDeleted = await prisma.comment.delete({
        where: {
          id: commentId,
        },
      });
      console.log(commentDeleted.id.toString());
      return reply.status(200).send({ deleted: true });
    } catch (e) {
      reply.status(400).send(new genericError('Não foi possivel concluir a requisição.'));
    }
  }
}

export default new CommentController();
