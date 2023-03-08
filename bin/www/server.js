import fastify from '../../dist/Fastify';

const run = async () => {
  try {
    await fastify.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 });
  } catch (e) {
    process.exit(1);
  }
};

run();

export default fastify;

// ZOD schema
// const userSchema = z.object({
//     name: z.string().min(3).max(50),
//     email: z.string().email(),
//     password: z.string().min(8).max(50)
// })
