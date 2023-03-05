import { z } from 'zod';

const createCauseSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export default createCauseSchema;
