
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsForumGroupIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsForumGroupIdGet(params.id);
    return response.data;
  } catch (ex) {
    console.error('boardsForumGroupIdGet error:', ex);
  }
}

