
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ReturnRequestApi } from '../../../gen';

export default async function returnRequestCustomerReturnRequestsGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ReturnRequestApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendReturnRequestCustomerReturnRequestsGet();
    return response.data;
  } catch (ex) {
    console.error('returnRequestCustomerReturnRequestsGet error:', ex);
  }
}

