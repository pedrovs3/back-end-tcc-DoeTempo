import { z } from 'zod';

const createUserBody = z.object({
  name: z.string(),
  email: z.string()
    .email(),
  password: z.string().optional(),
  description: z.string().optional().nullable(),
  attached_link: z.object({
    link: z.string(),
    source: z.string(),
  }).array(),
  banner_photo: z.string().optional().nullable(),
  cpf: z.string(),
  birthdate: z.coerce.date(),
  address: z.object({
    postal_code: z.string(),
    number: z.string(),
    complement: z.string()
      .optional()
      .nullable(),
  }),
  gender: z.string(),
  phone: z.object({
    number: z.string(),
  })
    .array()
    .optional(),
  rg: z.string()
    .optional()
    .nullable(),
  photo_url: z.string().optional().nullable(),
});

export default createUserBody;
