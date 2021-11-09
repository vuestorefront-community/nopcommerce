
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { PrivateMessagesApi } from '../../../gen';

export default async function privateMessagesIndexGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new PrivateMessagesApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendPrivateMessagesIndexGet(params.tab, params.pageNumber);
    return response.data;
  } catch (ex) {
    console.error('privateMessagesIndexGet error:', ex);
  }
}

