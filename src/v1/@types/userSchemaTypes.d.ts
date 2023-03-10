type userSchemaTypes = {
	name: string,
	email: string,
	password: string,
	cpf: string,
	birthdate: Date,
	address: {
		postal_code: string,
		number: string,
		complement?: string
	},
	id_gender: string,
	phone?: [{ number: string }]
	rg?: string,
}
