
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { VendorApi } from '../../../gen';

export default async function vendorApplyVendorGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new VendorApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendVendorApplyVendorGet();
    return response.data;
  } catch (ex) {
    console.error('vendorApplyVendorGet error:', ex);
  }
}

