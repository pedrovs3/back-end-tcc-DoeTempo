import { prisma } from '../../lib/prisma';

// export interface NGO{
// 	id: string
// 	name: string
// 	email: string
// 	foundation_date: Date
// 	cnpj: string
// 	description: string
// 	password: string
// 	id_type: string
// 	photoURL: string
// 	tbl_campaign: Campaign
// 	CommentNgo: CommentNgo
// 	tbl_following: Following
// 	tbl_type: Type
// }

class NgoRepository {
  async createNgo(ngoSchema: ngoSchemaTypes, newPassword: string) {
    const ngo = await prisma.nGO.create({
      data: {
        cnpj: ngoSchema.cnpj,
        email: ngoSchema.email,
        name: ngoSchema.name,
        foundation_date: ngoSchema.foundation_date,
        type: {
          connect: {
            name: 'ONG',
          },
        },
        ngo_address: {
          create: {
            address: {
              create: {
                number: ngoSchema.address.number,
                postal_code: ngoSchema.address.postal_code,
                complement: ngoSchema.address.complement || null,
              },
            },
          },
        },
        password: newPassword,
        photo_url: ngoSchema.photo_url || undefined,
      },
    });

    return ngo;
  }
}

export default new NgoRepository();
