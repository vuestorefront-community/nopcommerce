
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ShoppingCartApi } from '../../../gen';

export default async function shoppingCartApplyDiscountCouponPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ShoppingCartApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendShoppingCartApplyDiscountCouponPost(params.discountCouponCode, params.requestBody);
    return response.data;
  } catch (ex) {
    console.error('shoppingCartApplyDiscountCouponPost error:', ex);
  }
}

