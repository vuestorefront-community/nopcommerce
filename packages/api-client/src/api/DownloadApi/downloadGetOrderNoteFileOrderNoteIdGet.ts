
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { DownloadApi } from '../../../gen';

export default async function downloadGetOrderNoteFileOrderNoteIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new DownloadApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendDownloadGetOrderNoteFileOrderNoteIdGet(params.orderNoteId);
    return response.data;
  } catch (ex) {
    console.error('downloadGetOrderNoteFileOrderNoteIdGet error:', ex);
  }
}

