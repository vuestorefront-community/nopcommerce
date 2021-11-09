
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { PollApi } from '../../../gen';

export default async function pollVotePollAnswerIdGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new PollApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendPollVotePollAnswerIdGet(params.pollAnswerId);
    return response.data;
  } catch (ex) {
    console.error('pollVotePollAnswerIdGet error:', ex);
  }
}

