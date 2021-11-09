
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { NewsApi } from '../../../gen';

export default async function newsListRssLanguageIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new NewsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendNewsListRssLanguageIdGet(params.languageId);
    return response.data;
  } catch (ex) {
    console.error('newsListRssLanguageIdGet error:', ex);
  }
}

