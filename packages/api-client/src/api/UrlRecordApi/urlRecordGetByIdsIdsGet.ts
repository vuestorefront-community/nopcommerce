
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { UrlRecordApi } from '../../../gen';

export default async function urlRecordGetByIdsIdsGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new UrlRecordApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendUrlRecordGetByIdsIdsGet(params.ids);
    return response.data;
  } catch (ex) {
    console.error('urlRecordGetByIdsIdsGet error:', ex);
  }
}

