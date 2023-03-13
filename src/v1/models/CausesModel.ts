import { prisma } from '../lib/prisma';

class CausesModel {
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
}

export default new CausesModel();
