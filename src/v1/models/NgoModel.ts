import { prisma } from '../lib/prisma';
import { ngoSchemaTypes } from '../@types/ngoSchema';

class NgoModel {
  async createNgo(ngoSchema: ngoSchemaTypes, newPassword: string) {
    await prisma.nGO.create({
      data: {
        cnpj: ngoSchema.cnpj,
        email: ngoSchema.email,
        name: ngoSchema.name,
        foundation_date: ngoSchema.foundation_date,
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
