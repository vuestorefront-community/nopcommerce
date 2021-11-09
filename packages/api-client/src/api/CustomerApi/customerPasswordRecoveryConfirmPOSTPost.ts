
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CustomerApi } from '../../../gen';

export default async function customerPasswordRecoveryConfirmPOSTPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CustomerApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCustomerPasswordRecoveryConfirmPOSTPost(params.token, params.email, params.customerGuid, params.passwordRecoveryConfirmModelDto);
    return response.data;
  } catch (ex) {
    console.error('customerPasswordRecoveryConfirmPOSTPost error:', ex);
  }
}

