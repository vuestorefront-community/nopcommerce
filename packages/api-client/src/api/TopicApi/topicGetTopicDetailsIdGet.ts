
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { TopicApi } from '../../../gen';

export default async function topicGetTopicDetailsIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new TopicApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendTopicGetTopicDetailsIdGet(params.id);
    return response.data;
  } catch (ex) {
    console.error('topicGetTopicDetailsIdGet error:', ex);
  }
}

