
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CommonApi } from '../../../gen';

export default async function commonSitemapPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CommonApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCommonSitemapPost(params.sitemapPageModelDto);
    return response.data;
  } catch (ex) {
    console.error('commonSitemapPost error:', ex);
  }
}

