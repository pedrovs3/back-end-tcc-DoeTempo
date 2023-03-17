import { prisma } from '../src/v1/lib/prisma';

const date = new Date(Date.now());

async function main() {
  await prisma.user.deleteMany();
  // await prisma.gender.deleteMany();
  await prisma.address.deleteMany();

  // await prisma.gender.createMany({
  //   data: [
  //     {
  //       name: 'Feminino',
  //       abbreviation: 'F',
  //     },
  //     {
  //       name: 'Masculino',
  //       abbreviation: 'M',
  //     },
  //     {
  //       name: 'Prefiro não informar',
  //       abbreviation: ' ',
  //     },
  //   ],
  // });
  //
  // await prisma.type.createMany({
  //   data: [
  //     { name: 'USER' },
  //     { name: 'ONG' },
  //   ],
  // });

  // @ts-ignore
  const user1 = await prisma.user.create({
    data: {
      name: 'Pedro Vieira',
      birthdate: date,
      cpf: '48937257501',
      email: 'Teste@hotmail.com',
      password: 'teste123',
      // @ts-ignore
      userAddress: {
        create: {
          address: {
            create: {
              number: '146',
              postal_code: '06150-130',
            },
          },
        },
      },
      tbl_type: {
        connect: {
          id: '250e2a30-1b73-4c0e-8e61-b61efd24e183',
        },
      },
      tbl_user_phone: {
        create: {
          tbl_phone: {
            create: {
              number: '123141234132',
            },
          },
        },
      },
      gender: {
        connect: {
          id: '31e52f7c-861c-4f24-8ff9-96dad2267884',
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Enzo Prado',
      birthdate: date,
      cpf: '27489175414',
      email: 'enzodp@gmail.com',
      password: 'teste123',
      tbl_type: {
        connect: {
          id: '250e2a30-1b73-4c0e-8e61-b61efd24e183',
        },
      },
      // @ts-ignore
      userAddress: {
        create: {
          address: {
            create: {
              number: '146',
              postal_code: '06150-130',
            },
          },
        },
      },
      gender: {
        connect: {
          id: '31e52f7c-861c-4f24-8ff9-96dad2267884',
        },
      },
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'Gui Japo',
      birthdate: date,
      cpf: '48950273495',
      email: 'drpixelss@gmail.com',
      password: 'teste123',
      tbl_type: {
        connect: {
          id: '250e2a30-1b73-4c0e-8e61-b61efd24e183',
        },
      },
      // @ts-ignore
      userAddress: {
        create: {
          address: {
            create: {
              number: '146',
              postal_code: '06150-130',
            },
          },
        },
      },
      gender: {
        connect: {
          id: '31e52f7c-861c-4f24-8ff9-96dad2267884',
        },
      },
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      email: 'Teste@hotmail.com',
    },
    select: {
      name: true,
      email: true,
      tbl_type: {
        select: {
          name: true,
        },
      },
      // @ts-ignore
      userAddress: {
        select: {
          address: {
            select: {
              number: true,
              postal_code: true,
            },
          },
        },
      },
      cpf: true,
      id: true,
      gender: {
        select: {
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
    },
  });

  const ngo = await prisma.nGO.create({
    data: {
      name: 'Teste ngo',
      email: 'test@test.com',
      password: '4u10491',
      cnpj: '4029402104',
      tbl_type: {
        connect: {
          id: 'b2a70be9-175c-4b09-8339-b8d76748e6cf',
        },
      },
      tbl_ngo_address: {
        create: {
          tbl_address: {
            create: {
              number: '146',
              postal_code: '498124081',
            },
          },
        },
      },
    },
  });

  console.log(ngo);

  const users = await prisma.user.findMany();
  const userToDelete = await prisma.user.findUnique({
    where: {
      email: 'enzodp@gmail.com',
    },
    include: {
      // @ts-ignore
      userAddress: {
        include: {
          address: true,
        },
      },
    },
  });

  await prisma.address.delete({
    where: {
      // @ts-ignore
      id: userToDelete?.userAddress[0].id_address,
    },
  });

  await prisma.user.delete({
    where: {
      email: 'enzodp@gmail.com',
    },
  });
  const addresses = await prisma.address.findMany();

  console.log({
    user,
    users,
    addresses,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
