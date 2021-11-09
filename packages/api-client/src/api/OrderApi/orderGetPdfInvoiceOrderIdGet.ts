
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { OrderApi } from '../../../gen';

export default async function orderGetPdfInvoiceOrderIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new OrderApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendOrderGetPdfInvoiceOrderIdGet(params.orderId);
    return response.data;
  } catch (ex) {
    console.error('orderGetPdfInvoiceOrderIdGet error:', ex);
  }
}

