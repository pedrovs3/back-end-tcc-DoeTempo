import createCauseSchema from '../../../schemas/causeBodyZodSchema';
import { Cause } from '../../models/Cause';
import { prisma } from '../../../lib/prisma';
import causesRepository from '../../repositories/Causes.repository';

export class CreateCauseUseCase {
  async execute(cause: Cause) {
    try {
      const causeSchema = createCauseSchema.parse(cause);

      const causeWithSameName = await prisma.causes.findFirst({
        where: {
          title: cause.title,
        },
      });

      if (causeWithSameName) {
        throw new Error('Title already in use!');
      }

      const causeCreated = await causesRepository.createCause(causeSchema);

      return causeCreated as Cause;
    } catch (e) {
      return e;
    }
  }
}
