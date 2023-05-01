// import { FastifyReply, FastifyRequest } from 'fastify';
// import { genericError } from '../errors/GenericError';
// import { prisma } from '../lib/prisma';
//
// class LikesController {
//   async store(request: FastifyRequest, reply: FastifyReply) {
//     try {
//       // @ts-ignore
//       const { id } = request.params;
//       if (!id) {
//         return reply.status(400).send(new genericError('Os dados necessários nao foram enviados!'));
//       }
//
//       const updateLikes = await prisma.post.update({
//         where: {
//           id,
//         },
//         data: {
//           likes: +1,
//         },
//       });
//
//       console.log(updateLikes);
//     } catch (e) {
//       return 'Não foi possivel concluir a requisição! Tente novamente mais tarde ou entre em contato com o suporte.';
//     }
//   }
// }
//
// export default new LikesController();
