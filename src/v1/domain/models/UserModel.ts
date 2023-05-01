import { prisma } from '../../lib/prisma';

class UserModel {
  // @ts-ignore
  async deleteUser({ id }: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          user_address: {
            select: {
              address: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      // @ts-ignore
      const idAddress = user?.userAddress.address.id;
      console.log(idAddress);

      await prisma.user.delete({
        where: {
          id,
        },
      });

      await prisma.address.delete({
        where: {
          id: idAddress,
        },
      });

      return user;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  // @ts-ignore
  async findUserById(id : string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          password: false,
          cpf: true,
          birthdate: true,
          photo_url: true,
          rg: true,
          user_address: {
            select: {
              address: {
                select: {
                  postal_code: true,
                  number: true,
                },
              },
            },
          },
          gender: {
            select: {
              name: true,
              abbreviation: true,
            },
          },
          user_phone: {
            select: {
              phone: {
                select: {
                  number: true,
                },
              },
            },
          },
          following: {
            include: {
              user: {
                include: {
                  _count: true,
                },
              },
            },
          },
          campaign_participants: {
            select: {
              user: {
                select: {
                  _count: true,
                },
              },
            },
          },
        },
      });

      return user;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}

export default new UserModel();
