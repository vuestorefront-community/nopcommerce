
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { UrlRecordApi } from '../../../gen';

export default async function urlRecordGetActiveSlugEntityIdLanguageIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new UrlRecordApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendUrlRecordGetActiveSlugEntityIdLanguageIdGet(params.entityId, params.entityName, params.languageId);
    return response.data;
  } catch (ex) {
    console.error('urlRecordGetActiveSlugEntityIdLanguageIdGet error:', ex);
  }
}

