import { prisma } from '../lib/prisma';

class UserModel {
  async createUser(userSchema: userSchemaTypes, newPassword: string) {
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
        address: {
          create: {
            postal_code: userSchema.address.postal_code,
            number: userSchema.address.number,
            complement: userSchema.address.complement || '',
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
  }
}

export default new UserModel();
