import { z } from 'zod';

const createNgoBody = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cnpj: z.string().min(10).max(15),
  foundation_date: z.coerce.date(),
  address: z.object({
    postal_code: z.string(),
    number: z.string(),
    complement: z.string().optional().nullable(),
  }),
  phone: z.object({
    number: z.string(),
  }).array().optional(),
  photo_url: z.string().optional().nullable(),
});

export default createNgoBody;
