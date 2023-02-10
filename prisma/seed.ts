import { prisma } from '../src/v1/lib/prisma';

async function main() {
  // const teste = await prisma.user.create({
  //
  // });
  console.log();
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
