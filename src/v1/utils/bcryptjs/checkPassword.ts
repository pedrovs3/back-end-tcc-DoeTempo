import bcryptjs from 'bcryptjs';

// eslint-disable-next-line no-return-await,max-len
const checkPassword = async (inputPassword: string, password_hash: string) => await bcryptjs.compare(inputPassword, password_hash);

export default checkPassword;
