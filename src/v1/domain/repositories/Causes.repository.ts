import { prisma } from '../../lib/prisma';

class CausesRepository {
  async createCause(causeSchema: CauseSchemaTypes) {
    try {
      const cause = await prisma.causes.create({
        data: {
          title: causeSchema.title,
          description: causeSchema.description,
        },
      });
      return cause;
    } catch (e) {
      return {
        error: 500,
        e,
      };
    }
  }

  async findAll() {
    return prisma.causes.findMany() || 'Nao foram encontradas causas!';
  }
}

export default new CausesRepository();
