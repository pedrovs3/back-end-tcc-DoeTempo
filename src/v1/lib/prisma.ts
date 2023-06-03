// noinspection ES6UnusedImports
// eslint-disable-next-line
import { PrismaClient as PrismaClientSQL } from '../../../prisma/generated/mysql';
// eslint-disable-next-line
import { PrismaClient as PrismaClientMongo } from '../../../prisma/generated/mongodb';

export const prisma = new PrismaClientSQL({
  // log: ['query'],
});

export const mongo = new PrismaClientMongo({
  // log: ['query'],
});
