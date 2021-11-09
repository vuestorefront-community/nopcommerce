
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ShoppingCartApi } from '../../../gen';

export default async function shoppingCartUpdateCartPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ShoppingCartApi(null, context.config.api.url, clientInstance);
    console.log(params.requestBody);
    const response = await api.apiFrontendShoppingCartUpdateCartPost(params.requestBody);
    return response.data;
  } catch (ex) {
    console.error('shoppingCartUpdateCartPost error:', ex);
  }
}

