import bcryptjs from 'bcryptjs';

// @ts-ignore
// eslint-disable-next-line max-len,no-return-await
const hashPassword = async (password: string): string => await bcryptjs.hash(password, process.env.NUM_SALT_ROUNDS);

export default hashPassword;
