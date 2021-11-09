
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsSearchForumIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsSearchForumIdGet(params.searchTerms, params.forumId, params.within, params.limitDays, params.page, params.advs);
    return response.data;
  } catch (ex) {
    console.error('boardsSearchForumIdGet error:', ex);
  }
}

