import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CheckoutApi } from '../../../gen';

export default async function checkoutNewShippingAddressPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CheckoutApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCheckoutNewShippingAddressPost(params.checkoutShippingAddressModelDtoBaseModelDtoRequest);
    return response.data;
  } catch (ex) {
    console.error('checkoutNewShippingAddressPost error:', ex);
  }
}
