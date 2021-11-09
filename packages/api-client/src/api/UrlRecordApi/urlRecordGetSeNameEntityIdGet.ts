
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { UrlRecordApi } from '../../../gen';

export default async function urlRecordGetSeNameEntityIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new UrlRecordApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendUrlRecordGetSeNameEntityIdGet(params.entityId, params.entityName, params.languageId, params.returnDefaultValue, params.ensureTwoPublishedLanguages);
    return response.data;
  } catch (ex) {
    console.error('urlRecordGetSeNameEntityIdGet error:', ex);
  }
}

