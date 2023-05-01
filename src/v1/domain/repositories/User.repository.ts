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
          user_phone: {
            create: {
              phone: {
                create: { // @ts-ignore
                  number: userSchema.phone[0].number,
                },
              },
            },
          },
          user_address: {
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
          type: {
            connect: {
              name: 'USER',
            },
          },
          email: userSchema.email,
          password: newPassword,
          name: userSchema.name,
          birthdate: userSchema.birthdate,
          photo_url: userSchema.photoURL,
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
          photo_url: bodyToUpdate.photoURL || undefined,
          user_address: {
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
          user_phone: {
            update: {
              phone: {
                update: { // @ts-ignore
                  number: bodyToUpdate.phone[0].number || undefined,
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

      if (!user) {
        return 'Usuário não cadastrado na base de dados!';
      }

      // @ts-ignore
      const idAddress: string = user?.user_address.address.id;
      await prisma.user.delete({
        where: {
          id,
        },
      });
      await prisma.address.delete({
        // eslint-disable-next-line
       	where: {
          // eslint-disable-next-line
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
          user_address: {
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
          user_phone: {
            select: {
              phone: {
                select: {
                  number: true,
                },
              },
            },
          },
          supported_campaigns: {
            where: {
              id_user: id,
            },
            select: {
              campaign: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
          _count: {
            select: {
              supported_campaigns: true,
              following: true,
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
          user: {
            connect: {
              id: query.idUser,
            },
          },
          campaign: {
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
