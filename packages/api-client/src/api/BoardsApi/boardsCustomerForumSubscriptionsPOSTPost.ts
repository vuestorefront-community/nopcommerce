
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsCustomerForumSubscriptionsPOSTPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsCustomerForumSubscriptionsPOSTPost(params.requestBody);
    return response.data;
  } catch (ex) {
    console.error('boardsCustomerForumSubscriptionsPOSTPost error:', ex);
  }
}

