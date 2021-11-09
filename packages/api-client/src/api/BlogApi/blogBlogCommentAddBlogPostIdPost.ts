
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BlogApi } from '../../../gen';

export default async function blogBlogCommentAddBlogPostIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BlogApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBlogBlogCommentAddBlogPostIdPost(params.blogPostId, params.blogPostModelDto);
    return response.data;
  } catch (ex) {
    console.error('blogBlogCommentAddBlogPostIdPost error:', ex);
  }
}

