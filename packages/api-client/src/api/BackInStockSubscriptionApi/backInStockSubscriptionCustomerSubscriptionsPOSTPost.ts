
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BackInStockSubscriptionApi } from '../../../gen';

export default async function backInStockSubscriptionCustomerSubscriptionsPOSTPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BackInStockSubscriptionApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBackInStockSubscriptionCustomerSubscriptionsPOSTPost(params.requestBody);
    return response.data;
  } catch (ex) {
    console.error('backInStockSubscriptionCustomerSubscriptionsPOSTPost error:', ex);
  }
}

