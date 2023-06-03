import dotenv from 'dotenv';

dotenv.config();

export const { MAILGUN_KEY } = process.env;
export const { MAILGUN_DOMAIN } = process.env;
