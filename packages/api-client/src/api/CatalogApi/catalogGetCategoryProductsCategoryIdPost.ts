
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CatalogApi } from '../../../gen';

export default async function catalogGetCategoryProductsCategoryIdPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CatalogApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCatalogGetCategoryProductsCategoryIdPost(params.categoryId, params.catalogProductsCommandDto);
    return response.data;
  } catch (ex) {
    console.error('catalogGetCategoryProductsCategoryIdPost error:', ex);
  }
}

