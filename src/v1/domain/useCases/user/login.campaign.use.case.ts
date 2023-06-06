import { util } from 'zod';
import { Query } from '../../models/Query';
import campaignRepository from '../../repositories/Campaign.repository';
import userRepository from '../../repositories/User.repository';
import find = util.find;
import { mailgun } from '../../../lib/mailgun';
import { MAILGUN_DOMAIN } from '../../../lib/env';

export class LoginCampaignUseCase {
  async execute(query: Query, idUser: string) {
    try {
      const campaignParticipants = await campaignRepository
        .participantsByCampaign(query.idCampaign);

      const campaign = await campaignRepository.findById(query.idCampaign)
      const emailOng = campaign.ngo.email

      if (campaignParticipants && typeof campaignParticipants !== 'string') {
        // @ts-ignore
        campaignParticipants?.campaign_participants.forEach((user) => {
          if (user.id_user.includes(idUser)) {
            return 'Você já está inscrito nessa campanha!';
          }
        });
      }

      const emailToSend = {
        from: 'nao-responda@AMPI.org.br <nao-responda@AMPI.org.br>',
        to: emailOng,
        subject: 'Novo voluntário!',
        text: `Verique o perfil dele em: https://doetempo.vercel.app/perfil/USER/${idUser}`,
        html: `<html lang="pt-br">Verique o perfil dele em: https://doetempo.vercel.app/perfil/USER/${idUser}</html>`,
      };

      await mailgun.messages.create(MAILGUN_DOMAIN as string, emailToSend)
        .then((response: any) => {
          console.log('E-mail enviado com sucesso:', response);
        })
        .catch((error: any) => {
          console.error('Erro ao enviar e-mail:', error);
          throw new Error();
        });

      return await userRepository.loginInCampaign(query, idUser);
    } catch (e) {
      console.log(e);
      return 'Houve algum erro ao processar a solicitação';
    }
  }
}
