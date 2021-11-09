
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { DownloadApi } from '../../../gen';

export default async function downloadGetLicenseGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new DownloadApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendDownloadGetLicenseGet(params.orderItemGuid);
    return response.data;
  } catch (ex) {
    console.error('downloadGetLicenseGet error:', ex);
  }
}

