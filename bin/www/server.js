import fastify from '../../dist/Fastify';

const port = process.env.PORT || 3333;

const run = async () => {
  try {
    await fastify.listen({
      port,
      host: '0.0.0.0',
    });
  } catch (e) {
    process.exit(1);
  }
};

run();

export default fastify;
