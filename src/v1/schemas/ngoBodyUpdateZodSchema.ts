import { z } from 'zod';

const createNgoBodyToUpdate = z.object({
  name: z.string(),
  email: z.string()
    .email(),
  password: z.string(),
  attached_link: z.object({
    link: z.string().url(),
    source: z.string(),
  }).array().optional().nullable(),
  banner_photo: z.string().url().optional().nullable(),
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
  description: z.string().optional().nullable(),
  phone: z.object({
    number: z.string(),
  })
    .array()
    .optional(),
  photo_url: z.string().optional().nullable(),
});

export default createNgoBodyToUpdate;
