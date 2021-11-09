
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BlogApi } from '../../../gen';

export default async function blogListRssLanguageIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BlogApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBlogListRssLanguageIdGet(params.languageId);
    return response.data;
  } catch (ex) {
    console.error('blogListRssLanguageIdGet error:', ex);
  }
}

