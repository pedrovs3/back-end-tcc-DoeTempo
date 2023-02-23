import { prisma } from '../lib/prisma';

class UserModel {
  async createUser(userSchema: userSchemaTypes, newPassword: string) {
    try {
      const user = await prisma.user.create({
        data: {
          cpf: userSchema.cpf,
          rg: userSchema.rg,
          phone: {
            createMany: {
              data:
                userSchema.phone
                  ? userSchema.phone.map((number) => number)
                  : { number: null },
            },
          },
          // @ts-ignore
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
              // Temporary
              id: userSchema.gender === 'F' ? '096df662-be26-4037-9bbf-8d54be5b0eeb' : 'teste',
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

  async deleteUser(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          // @ts-ignore
          userAddress: true,
        },
      });

      return user;

      // const addressToDelete = await prisma.address.delete({
      //   where: {
      //     id:
      //   }
      // })
    } catch (e) {
      return e;
    }
  }
}

export default new UserModel();
