type ngoSchemaTypes = {
  name: string,
  email: string,
  password: string,
  foundation_date: Date,
  cnpj: string,
  address: {
    postal_code: string,
    number: string,
    complement?: string
  },
  phone?: [{ number: string }],
  photoURL: string
}
