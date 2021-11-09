
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { CountryApi } from '../../../gen';

export default async function countryGetStatesByCountryIdCountryIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new CountryApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendCountryGetStatesByCountryIdCountryIdGet(params.countryId, params.addSelectStateItem);
    return response.data;
  } catch (ex) {
    console.error('countryGetStatesByCountryIdCountryIdGet error:', ex);
  }
}

