import { prisma } from '../lib/prisma';

class UserModel {
  async createUser(userSchema: userSchemaTypes, newPassword: string) {
    try {
      const user = await prisma.user.create({
        data: {
          cpf: userSchema.cpf,
          rg: userSchema.rg,
          tbl_user_phone: {
            create: {
              tbl_phone: {
                create: {
                  number: undefined,
                },
              },
            },
          },
          userAddress: {
            create: {
              address: {
                create: {
                  number: userSchema.address.number,
                  postal_code: userSchema.address.postal_code,
                },
              },
            },
          },
          gender: {
            connect: {
              id: userSchema.gender,
            },
          },
          tbl_type: {
            connect: {
              name: 'USER',
            },
          },
          email: userSchema.email,
          password: newPassword,
          name: userSchema.name,
          birthdate: userSchema.birthdate,
          photoURL: userSchema.photoURL,
        },
      });

      return user;
    } catch (e) {
      return e;
    }
  }

  // @ts-ignore
  async deleteUser({ id }: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          userAddress: {
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

      console.log(user);

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
  async findUserById({ id }: string) {
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
          userAddress: {
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
          tbl_user_phone: {
            select: {
              tbl_phone: {
                select: {
                  number: true,
                },
              },
            },
          },
          tbl_following: {
            include: {
              tbl_user: {
                include: {
                  _count: true,
                },
              },
            },
          },
          tbl_campaign_participants: {
            select: {
              tbl_user: {
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
      return e;
    }
  }
}

export default new UserModel();
