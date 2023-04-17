import { prisma } from '../../lib/prisma';

class UserRepository {
  async createUser(userSchema: userSchemaTypes, newPassword: string) {
    try {
      const user = await prisma.user.create({
        data: {
          cpf: userSchema.cpf,
          rg: userSchema.rg,
          tbl_user_phone: {
            create: {
              tbl_phone: {
                create: { // @ts-ignore
                  number: userSchema.phone[0].number,
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

      if (!user) {
        throw new Error('Houve um erro ao criar o usuário');
      }

      return user;
    } catch (e) {
      return e;
    }
  }
}

export default new UserRepository();
