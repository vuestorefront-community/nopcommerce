
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsPostEditPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsPostEditPost(params.editForumPostModelDto);
    return response.data;
  } catch (ex) {
    console.error('boardsPostEditPost error:', ex);
  }
}

