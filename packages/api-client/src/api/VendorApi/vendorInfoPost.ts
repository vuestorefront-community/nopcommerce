
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { VendorApi } from '../../../gen';

export default async function vendorInfoPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new VendorApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendVendorInfoPost(params.contentType, params.infoRequest);
    return response.data;
  } catch (ex) {
    console.error('vendorInfoPost error:', ex);
  }
}

