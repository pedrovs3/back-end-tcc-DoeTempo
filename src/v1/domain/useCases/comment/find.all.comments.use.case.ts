import { prisma } from '../../../lib/prisma';

export default class FindAllCommentsUseCase {
  // @ts-ignore
  async execute(idPublication: string) {
    try {
      const commentsForSamePublication = await prisma.comment.findMany({
        where: {
          post: { id: idPublication },
        },
        select: {
          id: true,
          comment_ngo: {
            select: {
              ngo: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  photo_url: true,
                },
              },
            },
          },
          comment_user: {
            select: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  photo_url: true,
                },
              },
            },
          },
          content: true,
          created_at: true,
          comment_likes: {
            select: {
              id: true,
              comment: true,
            },
          },
          post: true,
          _count: {
            select: {
              comment_ngo: true,
              comment_user: true,
            },
          },
        },
      });

      commentsForSamePublication.forEach((comment) => {
        if (comment._count.comment_user === 0) {
          // @ts-ignore
          delete comment.comment_user;
          // @ts-ignore
          delete Object.assign(comment, { user: comment.comment_ngo[0] }).comment_ngo;
        } else if (comment._count.comment_ngo === 0) {
          // @ts-ignore
          delete comment.comment_ngo;
          // @ts-ignore
          delete Object.assign(comment, { user: comment.comment_user[0] }).comment_user;
        }
        // @ts-ignore
        delete comment._count;
      });

      if (commentsForSamePublication.length < 1) {
        return 'Não há comentários para esta publicação';
      }

      if (!commentsForSamePublication) {
        return 'Não foram encontrados comentários para essa publicação';
      }

      return commentsForSamePublication;
    } catch (e) {
      return 'Não foi possivel contatar os servidores! Tente novamente mais tarde ou entre em contato com o suporte.';
    }
  }
}
