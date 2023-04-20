export interface UpdateBodyUser {
	name: string;
	email: string;
	password: string;
	cpf: string;
	birthdate: Date;
	gender: string;
	address: { number: string; postal_code: string; complement?: string | null | undefined; };
	phone?: { number: string; }[] | undefined;
	rg?: string | null | undefined;
	photoURL?: string | null | undefined;
}
