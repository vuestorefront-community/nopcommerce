
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ProductApi } from '../../../gen';

export default async function productNewProductsRssGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ProductApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendProductNewProductsRssGet();
    return response.data;
  } catch (ex) {
    console.error('productNewProductsRssGet error:', ex);
  }
}

