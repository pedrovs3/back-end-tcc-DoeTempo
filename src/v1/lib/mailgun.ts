import Mailgun from 'mailgun.js';
import formData from 'form-data';
import { IMailgunClient } from 'mailgun.js/Interfaces';
import { MAILGUN_KEY } from './env';

// @ts-ignore
const mg = new Mailgun(formData);

export const mailgun: IMailgunClient = mg.client({
  key: MAILGUN_KEY as string,
  username: 'AMPI',
});
