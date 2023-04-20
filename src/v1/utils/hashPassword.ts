import bcryptjs from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => await bcryptjs.hash(password, 8);

export default hashPassword;
