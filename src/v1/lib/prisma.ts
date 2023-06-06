// eslint-disable-next-line @typescript-eslint/no-var-requires
const PrismaClientSQL = require('../../../prisma/generated/mysql').PrismaClient;
// eslint-disable-next-line
const PrismaClientMongo = require('../../../prisma/generated/mongodb').PrismaClient;

export const prisma = new PrismaClientSQL({
  // log: ['query'],
});

export const mongo = new PrismaClientMongo({
  // log: ['query'],
});
