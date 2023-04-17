import { FastifyReply, FastifyRequest } from 'fastify';
import causesRepository from '../domain/repositories/Causes.repository';
import { CreateCauseUseCase } from '../domain/useCases/cause/create.cause.use.case';

class CausesController {
  async store(request: FastifyRequest, reply: FastifyReply) {
    try {
      const cause = request.body;

      // @ts-ignore
      const causeCreated = new CreateCauseUseCase().execute(cause);

      if (!causeCreated) {
        reply.status(400).send({ errors: ['Não foi possivel criar a causa, tente novamente mais tarde!'] });
      }

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
