import { prisma } from '../../lib/prisma';
import { Query } from '../models/Query';
import { UpdateBodyUser } from '../models/UpdateBodyUser';

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

  async update(id: string, bodyToUpdate: UpdateBodyUser, newPassword: string) {
    try {
      const updateUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          password: newPassword,
          name: bodyToUpdate.name,
          birthdate: bodyToUpdate.birthdate,
          email: bodyToUpdate.email,
          rg: bodyToUpdate.rg || undefined,
          photoURL: bodyToUpdate.photoURL || undefined,
          userAddress: {
            update: {
              address: {
                update: {
                  number: bodyToUpdate.address.number,
                  postal_code: bodyToUpdate.address.postal_code,
                  complement: bodyToUpdate.address.complement,
                },
              },
            },
          },
          tbl_user_phone: {
            update: {
              where: {
                id_user: id,
              },
              data: {
                tbl_phone: {
                  update: { // @ts-ignore
                    number: bodyToUpdate.phone[0].number || undefined,
                  },
                },
              },
            },
          },
        },
      });

      if (!updateUser) {
        throw new Error('Não foi possível atualizar o registro de usuário');
      }

      return updateUser;
    } catch (e) {
      console.log(e);
      return 'Não foi possivel contatar os servidores!';
    }
  }

  async delete(id: string) {
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

      if (!user) {
        return 'Usuário não cadastrado na base de dados!';
      }

      // @ts-ignore
      const idAddress: string = user?.userAddress.address.id;
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
      return `Usuário '${user.name}' deletado com sucesso!`;
    } catch (e) {
      return 'Não foi possivel deletar o usuário! Tente novamente mais tarde ou entre em contato com o suporte.';
    }
  }

  async findById(id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          userAddress: {
            include: {
              address: true,
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
          tbl_campaign_participants: {
            where: {
              id_user: id,
            },
            select: {
              tbl_campaign: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
          _count: {
            select: {
              tbl_campaign_participants: true,
              tbl_following: true,
            },
          },
        },
      });

      if (!user) {
        return 'Não foi possivel encontrar o usuário';
      }

      return user;
    } catch (e) {
      return 'Não foi possivel contatar os servidores! Tente novamente mais tarde ou entre em contato com o suporte.';
    }
  }

  async loginInCampaign(query: Query) {
    try {
      const subscribedUser = await prisma.campaignParticipants.create({
        data: {
          tbl_user: {
            connect: {
              id: query.idUser,
            },
          },
          tbl_campaign: {
            connect: {
              id: query.idCampaign,
            },
          },
        },
      });

      if (!subscribedUser) {
        throw new Error('Houve um erro ao tentar se cadastrar na campanha');
      }

      return subscribedUser;
    } catch (e) {
      return 'Houve um erro ao contatar os servidores.';
    }
  }
}

export default new UserRepository();
