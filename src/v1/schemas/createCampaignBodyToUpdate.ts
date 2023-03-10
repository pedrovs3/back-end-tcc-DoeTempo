import { z } from 'zod';

const createCampaignBodyToUpdate = z.object({
  title: z.string(),
  description: z.string(),
  begin_date: z.coerce.date(),
  end_date: z.coerce.date(),
  home_office: z.boolean(),
  id_ngo: z.string(),
  how_to_contribute: z.string(),
  prerequisites: z.string(),
  address: z.object({
    postal_code: z.string(),
    number: z.string(),
    complement: z.string()
      .optional()
      .nullable(),
  }),
  causes: z.array(z.object({
    id: z.string(),
  })),
});

export default createCampaignBodyToUpdate;
