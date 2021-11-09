
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { NewsApi } from '../../../gen';

export default async function newsListPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new NewsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendNewsListPost(params.basePageableModelDto);
    return response.data;
  } catch (ex) {
    console.error('newsListPost error:', ex);
  }
}

