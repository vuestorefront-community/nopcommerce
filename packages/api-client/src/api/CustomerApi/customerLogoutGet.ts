
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CustomerApi } from '../../../gen';
import { AuthenticateApi } from '../../../gen';

export default async function customerLogoutGet(context: Context): Promise<void> {
  try {
    const clientInstance = await getClientInstance(context);
    const customerApi = new CustomerApi(null, context.config.api.url, clientInstance);
    const authenticateApi = new AuthenticateApi(null, context.config.api.url, clientInstance);

    await customerApi.apiFrontendCustomerLogoutGet();

    const tokenResponse = await authenticateApi.apiFrontendAuthenticateGetTokenPost({
      is_guest: true
    });

    if (tokenResponse && tokenResponse.data) {
      await context.config.state.setAuthentication(tokenResponse.data);
    }
  } catch (ex) {
    console.error('customerLogoutGet error:', ex);
  }
}

