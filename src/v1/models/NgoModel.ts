import { prisma } from '../lib/prisma';

class NgoModel {
  async createNgo(ngoSchema: ngoSchemaTypes, newPassword: string) {
    await prisma.nGO.create({
      data: {
        cnpj: ngoSchema.cnpj,
        email: ngoSchema.email,
        name: ngoSchema.name,
        foundation_date: ngoSchema.foundation_date,
        tbl_type: {
          connect: {
            id: 'b2a70be9-175c-4b09-8339-b8d76748e6cf',
          },
        },
        tbl_ngo_address: {
          create: {
            tbl_address: {
              create: {
                number: ngoSchema.address.number,
                postal_code: ngoSchema.address.postal_code,
                complement: ngoSchema.address.complement || null,
              },
            },
          },
        },
        password: newPassword,
      },
    });
  }
}
