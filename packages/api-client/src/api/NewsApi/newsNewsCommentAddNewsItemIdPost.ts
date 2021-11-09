
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { NewsApi } from '../../../gen';

export default async function newsNewsCommentAddNewsItemIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new NewsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendNewsNewsCommentAddNewsItemIdPost(params.newsItemId, params.newsItemModelDto);
    return response.data;
  } catch (ex) {
    console.error('newsNewsCommentAddNewsItemIdPost error:', ex);
  }
}

