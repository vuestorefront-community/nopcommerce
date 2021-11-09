
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { NewsApi } from '../../../gen';

export default async function newsGetNewsItemNewsItemIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new NewsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendNewsGetNewsItemNewsItemIdGet(params.newsItemId);
    return response.data;
  } catch (ex) {
    console.error('newsGetNewsItemNewsItemIdGet error:', ex);
  }
}

