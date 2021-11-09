
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CommonApi } from '../../../gen';

export default async function commonEuCookieLawAcceptGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CommonApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCommonEuCookieLawAcceptGet();
    return response.data;
  } catch (ex) {
    console.error('commonEuCookieLawAcceptGet error:', ex);
  }
}

