
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsPostVotePostIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsPostVotePostIdGet(params.postId, params.isUp);
    return response.data;
  } catch (ex) {
    console.error('boardsPostVotePostIdGet error:', ex);
  }
}

