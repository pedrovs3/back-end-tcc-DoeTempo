import { FastifyReply, FastifyRequest } from 'fastify';
import createCauseSchema from '../schemas/causeBodyZodSchema';
import causesRepository from '../domain/repositories/Causes.repository';
import { Cause } from '../domain/models/Cause';
import { CreateUserUseCase } from '../domain/useCases/user/create.user.use.case';

class CausesController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const cause = request.body;

      // @ts-ignore
      const causeCreated = new CreateUserUseCase().execute(cause);

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
      const causes = await causesRepository.findAll();

      if (!causes) {
        reply.status(404).send({ errors: ['Não foram encontradas causas.'] });
      }

      reply.status(200)
        .send({ causes });
    } catch (e) {
      reply.status(200)
        .send({ error: e });
    }
  }
}

export default new CausesController();
