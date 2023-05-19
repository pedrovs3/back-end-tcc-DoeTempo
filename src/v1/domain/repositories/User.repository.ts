import { User } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { Query } from '../models/Query';
import { UpdateBodyUser } from '../models/UpdateBodyUser';

class UserRepository {
  async createUser(userSchema: userSchemaTypes, newPassword: string) {
    try {
      let user: User;
      if (!userSchema.phone) {
        user = await prisma.user.create({
          data: {
            cpf: userSchema.cpf,
            rg: userSchema.rg,
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
            photo_url: userSchema.photo_url,
          },
        });
      } else {
        user = await prisma.user.create({
          data: {
            cpf: userSchema.cpf,
            rg: userSchema.rg,
            user_phone: {
              create: {
                phone: {
                  create: { // @ts-ignore
                    number: userSchema.phone[0].number || undefined,
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
            photo_url: userSchema.photo_url,
          },
        });
      }
      console.log(user);

      if (!user) {
        throw new Error('Houve um erro ao criar o usuário');
      }

      return user;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async update(id: string, bodyToUpdate: UpdateBodyUser, newPassword?: string) {
    try {
      let user: User;

      if (bodyToUpdate.attached_link) {
        if (newPassword) {
          if (!bodyToUpdate.phone) {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                password: newPassword,
                attached_link: {
                  deleteMany: {
                    id_user: id,
                  },
                  createMany: {
                    // @ts-ignore
                    data: bodyToUpdate.attached_link?.map(
                      (link) => ({ attached_link: link.link, id_source: link.source }),
                    ) || undefined,
                  },
                },
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
              },
            });
          } else {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                password: newPassword,
                attached_link: {
                  deleteMany: {
                    id_user: id,
                  },
                  createMany: {
                    // @ts-ignore
                    data: bodyToUpdate.attached_link?.map((link) => ({
                      attached_link: link.link,
                      id_source: link.source,
                    })) || undefined,
                  },
                },
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
                user_phone: {
                  upsert: {
                    update: {
                      phone: {
                        update: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                    create: {
                      phone: {
                        create: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                  },
                },
              },
            });
          }
        }
        if (!newPassword) {
          if (!bodyToUpdate.phone) {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                attached_link: {
                  deleteMany: {
                    id_user: id,
                  },
                  createMany: {
                    // @ts-ignore
                    data: bodyToUpdate.attached_link?.map((link) => ({
                      attached_link: link.link,
                      id_source: link.source,
                    })) || undefined,
                  },
                },
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
              },
            });
          } else {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {

                attached_link: {
                  deleteMany: {
                    id_user: id,
                  },
                  createMany: {
                    // @ts-ignore
                    data: bodyToUpdate.attached_link?.map((link) => ({
                      attached_link: link.link,
                      id_source: link.source,
                    })) || undefined,
                  },
                },
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
                user_phone: {
                  upsert: {
                    update: {
                      phone: {
                        update: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                    create: {
                      phone: {
                        create: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                  },
                },
              },
            });
          }
        }
      }
      if (!bodyToUpdate.attached_link) {
        if (newPassword) {
          if (!bodyToUpdate.phone) {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                password: newPassword,
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
              },
            });
          } else {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                password: newPassword,
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
                user_phone: {
                  upsert: {
                    update: {
                      phone: {
                        update: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                    create: {
                      phone: {
                        create: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                  },
                },
              },
            });
          }
        }
        if (!newPassword) {
          if (!bodyToUpdate.phone) {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
              },
            });
          } else {
            user = await prisma.user.update({
              where: {
                id,
              },
              data: {
                banner_photo: bodyToUpdate.banner_photo || undefined,
                description: bodyToUpdate.description || undefined,
                name: bodyToUpdate.name,
                birthdate: bodyToUpdate.birthdate,
                email: bodyToUpdate.email,
                rg: bodyToUpdate.rg || undefined,
                photo_url: bodyToUpdate.photo_url || undefined,
                user_phone: {
                  upsert: {
                    update: {
                      phone: {
                        update: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                    create: {
                      phone: {
                        create: {
                          number: bodyToUpdate.phone[0].number || undefined,
                        },
                      },
                    },
                  },
                },
              },
            });
          }
        }
      }

      // @ts-ignore
      if (!user) {
        throw new Error('Não foi possível atualizar o registro de usuário');
      }

      return user;
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
          attached_link: {
            include: {
              source: true,
            },
          },
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
                  description: true,
                  campaign_photos: {
                    select: {
                      photo_url: true,
                    },
                  },
                  is_active: true,
                },
              },
            },
          },
          post_user: {
            select: {
              post: {
                select: {
                  id: true,
                  content: true,
                  post_likes: true,
                  created_at: true,
                  post_photo: true,
                  _count: true,
                  comment: true,
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
      console.log(e);
      return 'Não foi possivel contatar os servidores! Tente novamente mais tarde ou entre em contato com o suporte.';
    }
  }

  async loginInCampaign(query: Query, idUser: string) {
    try {
      console.log(idUser);
      const subscribedUser = await prisma.campaignParticipants.create({
        data: {
          user: {
           	connect: {
							 id: idUser,
            },
          },
          campaign: {
            connect: {
              id: query.idCampaign,
            },
          },
          status: {
            connect: {
              name: 'Aguardando',
            },
          },
        },
      });

      if (!subscribedUser) {
        throw new Error('Houve um erro ao tentar se cadastrar na campanha');
      }

      return subscribedUser;
    } catch (e) {
      console.log(e);
      return 'Houve um erro ao contatar os servidores.';
    }
  }
}

export default new UserRepository();
