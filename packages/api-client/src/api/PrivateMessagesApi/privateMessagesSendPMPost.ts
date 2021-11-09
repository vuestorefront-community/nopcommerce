
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { PrivateMessagesApi } from '../../../gen';

export default async function privateMessagesSendPMPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new PrivateMessagesApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendPrivateMessagesSendPMPost(params.sendPrivateMessageModelDto);
    return response.data;
  } catch (ex) {
    console.error('privateMessagesSendPMPost error:', ex);
  }
}

