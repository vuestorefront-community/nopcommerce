
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { AuthenticateApi } from '../../../gen';
import { AuthenticateResponse, AuthenticateCustomerRequest } from '../../../gen';

export default async function authenticateGetTokenPost(context: Context, { authenticateCustomerRequest }: { authenticateCustomerRequest: AuthenticateCustomerRequest }): Promise<AuthenticateResponse> {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new AuthenticateApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendAuthenticateGetTokenPost(authenticateCustomerRequest);

    if (response && response.data) {
      await context.config.state.setAuthentication(response.data);
    }

    return response.data;
  } catch (ex) {
    console.error('authenticateGetTokenPost error:', ex);
  }
}

