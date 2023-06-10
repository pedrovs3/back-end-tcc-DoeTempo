import { mailgun } from '../lib/mailgun';
import { MAILGUN_DOMAIN } from '../lib/env';

export const sendEmail = async (
  emailToSend: string,
  subtitle: string,
  colorStatus: string,
  campaignName: string,
  statusName: string,
  idUser: string,
) => {
  const emailData = {
    from: 'nao-responda@AMPI.org.br <nao-responda@AMPI.org.br>',
    to: emailToSend,
    subject: subtitle,
    template: 'notify_user_alter_status',
    'h:X-Mailgun-Variables': JSON.stringify({
      colorStatus,
      campaignName,
      statusName,
      idUser,
    }),
  };

  await mailgun.messages.create(MAILGUN_DOMAIN as string, emailData)
    .then((response: any) => {
      console.log('E-mail enviado com sucesso:', response);
    })
    .catch((error: any) => {
      console.error('Erro ao enviar e-mail:', error);
      throw new Error();
    });
};
