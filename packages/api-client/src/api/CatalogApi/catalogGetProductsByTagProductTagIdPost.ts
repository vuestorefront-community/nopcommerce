
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CatalogApi } from '../../../gen';

export default async function catalogGetProductsByTagProductTagIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CatalogApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCatalogGetProductsByTagProductTagIdPost(params.productTagId, params.catalogProductsCommandDto);
    return response.data;
  } catch (ex) {
    console.error('catalogGetProductsByTagProductTagIdPost error:', ex);
  }
}

