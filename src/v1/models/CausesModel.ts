import { prisma } from '../lib/prisma';

class CausesModel {
  async createCause(causeSchema: CauseSchemaTypes) {
    try {
      await prisma.causes.create({
        data: {
          title: causeSchema.title,
          description: causeSchema.description,
        },
      });

      return { message: 'created with success' };
    } catch (e) {
      return {
        error: 500,
        e,
      };
    }
  }
}

export default new CausesModel();
