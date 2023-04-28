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
          CommentNgo: {
            select: {
              ngo: true,
            },
          },
          CommentUser: {
            select: {
              user: true,
            },
          },
          content: true,
          created_at: true,
          likes: true,
          post: true,
          _count: {
            select: {
              CommentNgo: true,
              CommentUser: true,
            },
          },
        },
      });

      commentsForSamePublication.forEach((comment) => {
        if (comment._count.CommentUser === 0) {
          // @ts-ignore
          delete comment.CommentUser;
          // @ts-ignore
          delete Object.assign(comment, { user: comment.CommentNgo[0] }).CommentNgo;
        } else if (comment._count.CommentNgo === 0) {
          // @ts-ignore
          delete comment.CommentNgo;
          // @ts-ignore
          delete Object.assign(comment, { user: comment.CommentUser[0] }).CommentUser;
        }
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
