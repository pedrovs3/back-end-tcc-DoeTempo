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
                  number: null,
                },
              },
            },
          },
          tbl_type: {
            connect: {
              id: '250e2a30-1b73-4c0e-8e61-b61efd24e183',
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
          email: userSchema.email,
          password: newPassword,
          name: userSchema.name,
          birthdate: userSchema.birthdate,
        },
      });

      return user;
    } catch (e) {
      return e;
    }
  }

  // @ts-ignore
  async deleteUser({ id } : string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          // @ts-ignore
          userAddress: true,
        },
      });

      const idAddress = user!.userAddress[0].id_address;

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
      return e;
    }
  }
}

export default new UserModel();
