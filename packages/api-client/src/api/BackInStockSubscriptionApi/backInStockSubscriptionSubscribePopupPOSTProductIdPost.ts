
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BackInStockSubscriptionApi } from '../../../gen';

export default async function backInStockSubscriptionSubscribePopupPOSTProductIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BackInStockSubscriptionApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBackInStockSubscriptionSubscribePopupPOSTProductIdPost(params.productId);
    return response.data;
  } catch (ex) {
    console.error('backInStockSubscriptionSubscribePopupPOSTProductIdPost error:', ex);
  }
}

