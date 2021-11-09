
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ReturnRequestApi } from '../../../gen';

export default async function returnRequestUploadFileReturnRequestPost(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ReturnRequestApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendReturnRequestUploadFileReturnRequestPost(params.fileName, params.contentType, params.body);
    return response.data;
  } catch (ex) {
    console.error('returnRequestUploadFileReturnRequestPost error:', ex);
  }
}

