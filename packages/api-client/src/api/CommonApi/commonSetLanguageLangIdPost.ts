
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CommonApi } from '../../../gen';

export default async function commonSetLanguageLangIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CommonApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCommonSetLanguageLangIdPost(params.langId, params.returnUrl);
    return response.data;
  } catch (ex) {
    console.error('commonSetLanguageLangIdPost error:', ex);
  }
}

