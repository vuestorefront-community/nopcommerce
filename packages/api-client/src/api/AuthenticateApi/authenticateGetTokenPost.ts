
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { AuthenticateApi } from '../../../gen';

export default async function authenticateGetTokenPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new AuthenticateApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendAuthenticateGetTokenPost(params.authenticateCustomerRequest);
    return response.data;
  } catch (ex) {
    console.error('authenticateGetTokenPost error:', ex);
  }
}

