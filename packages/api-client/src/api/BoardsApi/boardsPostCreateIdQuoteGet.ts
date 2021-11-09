
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { BoardsApi } from '../../../gen';

export default async function boardsPostCreateIdQuoteGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new BoardsApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendBoardsPostCreateIdQuoteGet(params.id, params.quote, params.quoteId);
    return response.data;
  } catch (ex) {
    console.error('boardsPostCreateIdQuoteGet error:', ex);
  }
}

