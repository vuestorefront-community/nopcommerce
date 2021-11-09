
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { OrderApi } from '../../../gen';

export default async function orderCustomerRewardPointsGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new OrderApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendOrderCustomerRewardPointsGet(params.pageNumber);
    return response.data;
  } catch (ex) {
    console.error('orderCustomerRewardPointsGet error:', ex);
  }
}

