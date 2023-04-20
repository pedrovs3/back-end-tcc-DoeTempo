import createError from '@fastify/error';

export const genericError = createError('400', '%s', 400);
