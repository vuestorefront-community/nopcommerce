
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { OrderApi } from '../../../gen';

export default async function orderCustomerOrdersGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new OrderApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendOrderCustomerOrdersGet();
    return response.data;
  } catch (ex) {
    console.error('orderCustomerOrdersGet error:', ex);
  }
}

