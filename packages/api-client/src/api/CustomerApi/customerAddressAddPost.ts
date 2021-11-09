
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CustomerApi } from '../../../gen';

export default async function customerAddressAddPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CustomerApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCustomerAddressAddPost(params.customerAddressEditModelDtoBaseModelDtoRequest);
    return response.data;
  } catch (ex) {
    console.error('customerAddressAddPost error:', ex);
  }
}

