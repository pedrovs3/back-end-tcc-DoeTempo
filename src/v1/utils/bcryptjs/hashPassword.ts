import bcryptjs from 'bcryptjs';

// @ts-ignore
// eslint-disable-next-line max-len,no-return-await
const hashPassword = async (password: string): string => await bcryptjs.hash(password, 8);

export default hashPassword;
