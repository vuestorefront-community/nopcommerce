
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CustomerApi } from '../../../gen';

export default async function customerInfoPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CustomerApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCustomerInfoPost(params.customerInfoModelDtoBaseModelDtoRequest);
    return response.data;
  } catch (ex) {
    console.error('customerInfoPost error:', ex);
  }
}

