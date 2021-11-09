
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ShoppingCartApi } from '../../../gen';

export default async function shoppingCartProductDetailsAttributeChangeProductIdPut(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ShoppingCartApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendShoppingCartProductDetailsAttributeChangeProductIdPut(params.productId, params.validateAttributeConditions, params.loadPicture, params.requestBody);
    return response.data;
  } catch (ex) {
    console.error('shoppingCartProductDetailsAttributeChangeProductIdPut error:', ex);
  }
}

