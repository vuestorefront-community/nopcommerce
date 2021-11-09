
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { VendorApi } from '../../../gen';

export default async function vendorRemovePictureDelete(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new VendorApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendVendorRemovePictureDelete();
    return response.data;
  } catch (ex) {
    console.error('vendorRemovePictureDelete error:', ex);
  }
}

