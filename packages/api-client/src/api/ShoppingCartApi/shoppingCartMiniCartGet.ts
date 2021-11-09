
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ShoppingCartApi } from '../../../gen';

export default async function shoppingCartMiniCartGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ShoppingCartApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendShoppingCartMiniCartGet();
    return response.data;
  } catch (ex) {
    console.error('shoppingCartMiniCartGet error:', ex);
  }
}

