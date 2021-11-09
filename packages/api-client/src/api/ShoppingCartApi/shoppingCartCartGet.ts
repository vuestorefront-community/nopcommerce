
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ShoppingCartApi } from '../../../gen';

export default async function shoppingCartCartGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ShoppingCartApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendShoppingCartCartGet();
    return response.data;
  } catch (ex) {
    console.error('shoppingCartCartGet error:', ex);
  }
}

