import { prisma } from '../../lib/prisma';

class SourcesRepository {
  async getAll() {
    try {
      const sources = await prisma.source.findMany({
        select: {
          id: true,
          name: true,
          _count: true,
        },
      });

      if (!sources) {
        return 'Não foi possivel encontrar registros no banco de dados!';
      }

      return sources;
    } catch (e) {
      return ServerMessageError.MESSAGE;
    }
  }
}

export default new SourcesRepository();
