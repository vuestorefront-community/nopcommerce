
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { NewsletterApi } from '../../../gen';

export default async function newsletterSubscribeNewsletterGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new NewsletterApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendNewsletterSubscribeNewsletterGet(params.email, params.subscribe);
    return response.data;
  } catch (ex) {
    console.error('newsletterSubscribeNewsletterGet error:', ex);
  }
}

