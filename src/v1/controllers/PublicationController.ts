import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

class PublicationController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      const allPosts = await prisma.post.findMany({
        include: {
          _count: true,
        },
      });

      reply.status(200).send({ allPosts });
    } catch (e) {
      console.error(e);
      reply.status(500).send(e);
    }
  }

  async show(request: FastifyRequest, reply: FastifyReply) {
    try {
      // @ts-ignore
      const { id }: string = request.params;
      const data = await prisma.post.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          content: true,
          created_at: true,
          _count: true,
          PostNgo: {
            select: {
              ngo: true,
            },
          },
          PostPhoto: {
            select: {
              photo_url: true,
            },
          },
          PostUser: {
            select: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  photoURL: true,
                  gender: true,
                },
              },
            },
          },
          Comment: true,
        },
      });

      if (!data) {
        reply.status(404).send({ error: ['Post not found in DB'] });
      }

      reply.status(200).send({ message: 'Find with success', payload: data });
    } catch (e) {
      console.error(e);
      reply.status(500).send({ errors: [e] });
    }
  }

  async store(request: FastifyRequest, reply: FastifyReply) {
    let data;
    try {
      const createPostBody = z.object({
        content: z.string(),
        type_of_user: z.string(),
        photos: z.string().array(),
      });

      // @ts-ignore
      const { user } = request.query;

      const body = createPostBody.parse(request.body);

      if (body.type_of_user === 'USER') {
        data = await prisma.post.create({
          data: {
            content: body.content,
            PostPhoto: {
              createMany: {
                data: body.photos.map((photo_url) => ({ photo_url })),
              },
            },
            PostUser: {
              create: {
                user: {
                  connect: {
                    id: user,
                  },
                },
              },
            },
          },
        });
      } else {
        data = await prisma.post.create({
          data: {
            content: body.content,
            PostPhoto: {
              createMany: {
                data: body.photos.map((photo_url) => ({ photo_url })),
              },
            },
            PostNgo: {
              create: {
                ngo: {
                  connect: {
                    id: user,
                  },
                },
              },
            },
          },
        });
      }

      reply.status(201).send({ message: 'Created with success!', payload: data });
    } catch (e) {
      console.log(e);
      reply.status(500).send({ errors: ['Não foi possivel criar o post!'] });
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createBodyToUpdate = z.object({
        content: z.string(),
        photos: z.string().array(),
      });

      const body = createBodyToUpdate.parse(request.body);

      // @ts-ignore
      const { id }: string = request.params;

      const updatedBody = await prisma.post.update({
        where: {
          id,
        },
        data: {
          content: body.content,
          PostPhoto: {
            deleteMany: {
              id_post: id,
            },
            create: body.photos.map((photo_url) => ({ photo_url })),
          },
        },
      });

      console.log(updatedBody);

      reply.status(200).send({ message: 'Updated with success!', updatedBody });
    } catch (e) {
      console.log(e);
      reply.status(500).send({ errors: [e] });
    }
  }
}

export default new PublicationController();
