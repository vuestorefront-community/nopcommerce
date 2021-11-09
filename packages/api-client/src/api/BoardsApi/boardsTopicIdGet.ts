
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsTopicIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsTopicIdGet(params.id, params.pageNumber);
    return response.data;
  } catch (ex) {
    console.error('boardsTopicIdGet error:', ex);
  }
}

