import createError from '@fastify/error';

export const NotFoundError = createError('404', '%s', 404);
