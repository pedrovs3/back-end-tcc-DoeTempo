import { FastifyReply, FastifyRequest } from 'fastify';
import createCauseSchema from '../schemas/causeBodyZodSchema';
import causesModel from '../models/CausesModel';
import { prisma } from '../lib/prisma';

class CausesController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const causeSchema = createCauseSchema.parse(request.body);
      const causeCreated = await causesModel.createCause(causeSchema);

      reply.status(201)
        .send({
          message: 'Created with success!',
          payload: causeCreated,
        });
    } catch (e) {
      reply.status(400)
        .send({ errors: ['Não foi possivel concluir a operação', e] });
    }
  }

  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const causes = await prisma.causes.findMany();
      reply.status(200)
        .send({ causes });
    } catch (e) {
      reply.status(200)
        .send({ error: e });
    }
  }
}

export default new CausesController();
