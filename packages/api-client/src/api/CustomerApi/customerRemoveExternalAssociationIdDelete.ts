
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CustomerApi } from '../../../gen';

export default async function customerRemoveExternalAssociationIdDelete(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CustomerApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCustomerRemoveExternalAssociationIdDelete(params.id);
    return response.data;
  } catch (ex) {
    console.error('customerRemoveExternalAssociationIdDelete error:', ex);
  }
}

