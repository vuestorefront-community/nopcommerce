
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ShoppingCartApi } from '../../../gen';

export default async function shoppingCartGetEstimateShippingPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ShoppingCartApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendShoppingCartGetEstimateShippingPost(params.estimateShippingModelDtoBaseModelDtoRequest);
    return response.data;
  } catch (ex) {
    console.error('shoppingCartGetEstimateShippingPost error:', ex);
  }
}

