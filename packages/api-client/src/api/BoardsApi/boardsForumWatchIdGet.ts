
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsForumWatchIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsForumWatchIdGet(params.id);
    return response.data;
  } catch (ex) {
    console.error('boardsForumWatchIdGet error:', ex);
  }
}

