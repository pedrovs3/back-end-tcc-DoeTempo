import fastify from '../../dist/Fastify';

const run = async () => {
  try {
    await fastify.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3333,
      host: '0.0.0.0',
    });
  } catch (e) {
    process.exit(1);
  }
};

run();

export default fastify;
