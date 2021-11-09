
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { UrlRecordApi } from '../../../gen';

export default async function urlRecordGetBySlugGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new UrlRecordApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendUrlRecordGetBySlugGet(params.slug);
    return response.data;
  } catch (ex) {
    console.error('urlRecordGetBySlugGet error:', ex);
  }
}

