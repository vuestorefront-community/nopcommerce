
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { WishlistApi } from '../../../gen';

export default async function wishlistEmailWishlistGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new WishlistApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendWishlistEmailWishlistGet();
    return response.data;
  } catch (ex) {
    console.error('wishlistEmailWishlistGet error:', ex);
  }
}

