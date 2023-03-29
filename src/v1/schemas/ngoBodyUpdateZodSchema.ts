import { z } from 'zod';

const createNgoBodyToUpdate = z.object({
  name: z.string(),
  email: z.string()
    .email(),
  password: z.string(),
  cnpj: z.string()
    .min(10)
    .max(15),
  foundation_date: z.coerce.date(),
  address: z.object({
    postal_code: z.string(),
    number: z.string(),
    complement: z.string()
      .optional()
      .nullable(),
  }),
  description: z.string(),
  phone: z.object({
    number: z.string(),
  })
    .array()
    .optional(),
  photoURL: z.string().optional().nullable(),
});

export default createNgoBodyToUpdate;
