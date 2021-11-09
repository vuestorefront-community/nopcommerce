
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CommonApi } from '../../../gen';

export default async function commonSetStoreThemeGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CommonApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCommonSetStoreThemeGet(params.themeName);
    return response.data;
  } catch (ex) {
    console.error('commonSetStoreThemeGet error:', ex);
  }
}

