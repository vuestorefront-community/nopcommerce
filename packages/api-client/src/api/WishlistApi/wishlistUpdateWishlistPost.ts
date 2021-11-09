
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { WishlistApi } from '../../../gen';

export default async function wishlistUpdateWishlistPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new WishlistApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendWishlistUpdateWishlistPost(params.requestBody);
    return response.data;
  } catch (ex) {
    console.error('wishlistUpdateWishlistPost error:', ex);
  }
}

