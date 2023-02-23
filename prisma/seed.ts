import { prisma } from '../src/v1/lib/prisma';

const date = new Date(Date.now());

async function main() {
  await prisma.user.deleteMany();
  await prisma.gender.deleteMany();
  await prisma.address.deleteMany();

  await prisma.gender.createMany({
    data: [
      { name: 'Feminino', abbreviation: 'F' },
      { id: 'teste', name: 'Masculino', abbreviation: 'M' },
    ],
  });

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
      gender: {
        connect: {
          id: 'teste',
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
          id: 'teste',
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
          id: 'teste',
        },
      },
    },
  });

  const insertPhoneNumbers = await prisma.user.update({
    where: {
      email: 'Teste@hotmail.com',
    },
    data: {
      phone: {
        createMany: {
          data: [
            { number: '11988220443' },
            { number: '11988220443' },
          ],
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
      phone: {
        select: {
          number: true,
        },
      },
    },
  });

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

  console.log({ user, users, addresses });
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
