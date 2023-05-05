import createError from '@fastify/error';

export const unauthorizedError = createError('401', '%s', 401);
