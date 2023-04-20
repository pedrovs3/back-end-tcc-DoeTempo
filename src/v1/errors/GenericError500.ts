import createError from '@fastify/error';

export const genericError500 = createError('500', '%s', 400);
