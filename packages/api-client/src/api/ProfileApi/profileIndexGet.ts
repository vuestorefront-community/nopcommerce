
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ProfileApi } from '../../../gen';

export default async function profileIndexGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ProfileApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendProfileIndexGet(params.id, params.pageNumber);
    return response.data;
  } catch (ex) {
    console.error('profileIndexGet error:', ex);
  }
}

