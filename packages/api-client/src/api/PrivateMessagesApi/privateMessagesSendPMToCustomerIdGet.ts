
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { PrivateMessagesApi } from '../../../gen';

export default async function privateMessagesSendPMToCustomerIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new PrivateMessagesApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendPrivateMessagesSendPMToCustomerIdGet(params.toCustomerId, params.replyToMessageId);
    return response.data;
  } catch (ex) {
    console.error('privateMessagesSendPMToCustomerIdGet error:', ex);
  }
}

