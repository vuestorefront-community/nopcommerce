
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { UrlRecordApi } from '../../../gen';

export default async function urlRecordGetAllGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new UrlRecordApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendUrlRecordGetAllGet(params.slug, params.languageId, params.isActive, params.pageIndex, params.pageSize);
    return response.data;
  } catch (ex) {
    console.error('urlRecordGetAllGet error:', ex);
  }
}

