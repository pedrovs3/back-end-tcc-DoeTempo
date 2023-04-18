import { FastifyReply, FastifyRequest } from 'fastify';
import { GetCountUseCase } from '../domain/useCases/counts/get.count.use.case';

class CountController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const counts = await new GetCountUseCase().execute();

      if (!counts) {
        reply.status(404).send({ error: 'Não foram encontrados dados para essa rota!' });
      }

      reply.status(200).send({
        counts,
      });
    } catch (e) {
      console.log(e);
      reply.status(400).send({ error: 'Houve um problema ao buscar os dados. Tente novamente em alguns instantes!' });
    }
  }
}

export default new CountController();
