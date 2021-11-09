
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CommonApi } from '../../../gen';

export default async function commonSetCurrencyCustomerCurrencyIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CommonApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCommonSetCurrencyCustomerCurrencyIdPost(params.customerCurrencyId, params.returnUrl);
    return response.data;
  } catch (ex) {
    console.error('commonSetCurrencyCustomerCurrencyIdPost error:', ex);
  }
}

