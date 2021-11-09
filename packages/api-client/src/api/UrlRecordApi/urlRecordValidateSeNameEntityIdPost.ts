
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { UrlRecordApi } from '../../../gen';

export default async function urlRecordValidateSeNameEntityIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new UrlRecordApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendUrlRecordValidateSeNameEntityIdPost(params.entityName, params.seName, params.name, params.ensureNotEmpty, params.entityId);
    return response.data;
  } catch (ex) {
    console.error('urlRecordValidateSeNameEntityIdPost error:', ex);
  }
}

