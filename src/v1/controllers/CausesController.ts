import { FastifyReply, FastifyRequest } from 'fastify';
import createCauseSchema from '../schemas/causeBodyZodSchema';
import causesModel from '../models/CausesModel';

class CausesController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const causeSchema = createCauseSchema.parse(request.body);
      await causesModel.createCause(causeSchema);

      reply.status(200).send({ message: 'Created with success!' });
    } catch (e) {
      reply.status(400).send({ errors: ['Não foi possivel concluir a operação', e] });
    }
  }
}

export default new CausesController();
