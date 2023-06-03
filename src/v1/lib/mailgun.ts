import mailgun_js from 'mailgun-js';
import { MAILGUN_KEY, MAILGUN_DOMAIN } from './env';

export const mailgun = mailgun_js({
  apiKey: MAILGUN_KEY as string,
  domain: MAILGUN_DOMAIN as string,
});
