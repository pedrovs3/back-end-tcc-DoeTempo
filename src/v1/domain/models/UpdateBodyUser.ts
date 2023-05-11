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
	photo_url?: string | null | undefined;
	attached_link?: {link: string, source: string}[] | null | undefined;
	banner_photo?: string;
	description?: string;
}
