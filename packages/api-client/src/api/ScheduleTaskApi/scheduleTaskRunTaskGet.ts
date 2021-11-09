
import { Context } from './../../types/Context';
import { getClientInstance } from '../../helpers/apiClient';
import { ScheduleTaskApi } from '../../../gen';

export default async function scheduleTaskRunTaskGet(context: Context, params) {
  try {
    const clientInstance = await getClientInstance(context);
    const api = new ScheduleTaskApi(null, context.config.api.url, clientInstance);

    const response = await api.apiFrontendScheduleTaskRunTaskGet(params.taskType);
    return response.data;
  } catch (ex) {
    console.error('scheduleTaskRunTaskGet error:', ex);
  }
}

