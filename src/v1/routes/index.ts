import { FastifyInstance } from 'fastify';
import homeController from '../controllers/HomeController';
import { userRoutes } from './user/userRoutes';
import { genderRoutes } from './gender/genderRoutes';
import { ngoRoutes } from './ngo/ngoRoutes';
import { tokenRoutes } from './token/tokenRoutes';
import { causesRoutes } from './cause/causesRoutes';

// Declaration of an api route
async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/', homeController.index);
}

export {
  appRoutes,
  userRoutes,
  genderRoutes,
  ngoRoutes,
  tokenRoutes,
  causesRoutes,
};
