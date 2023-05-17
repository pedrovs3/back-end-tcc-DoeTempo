import { FastifyReply, FastifyRequest } from 'fastify';
import { genericError } from '../errors/GenericError';
import sourcesRepository from '../domain/repositories/Sources.repository';
import { genericError500 } from '../errors/GenericError500';

class SourcesController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const sources = await sourcesRepository.getAll();

      if (typeof sources === 'string') {
        if (sources.includes('servidor')) {
          reply.status(500).send(new genericError500(sources));
        } else {
          reply.status(400).send(new genericError(sources));
        }
      }

      reply.status(200).send({ sources });
    } catch (e) {
      // @ts-ignore
      return reply.status(400).send(new genericError(e.message().toString));
    }
  }
}

export default new SourcesController();
