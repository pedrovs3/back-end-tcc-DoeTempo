import { Type } from '@prisma/client';
import { Phone } from './Phone';
import { Address } from './Address';
import { Gender } from './Gender';

export interface User {
	id: string
	name: string
	cpf: string
	rg?: string
	tbl_user_phone?: Phone
	address: Address
	gender: Gender
	tbl_type: Type
	email: string,
	password: string
	birthdate: Date
	photoURL: string
}
