
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsTopicCreateIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsTopicCreateIdGet(params.id);
    return response.data;
  } catch (ex) {
    console.error('boardsTopicCreateIdGet error:', ex);
  }
}

