import { Context } from './../../types/Context';
import { AuthenticateApi, AuthenticateResponse } from '../../../gen';
import { AxiosInstance } from 'axios';

export const getClientInstance: (context: Context) => Promise<AxiosInstance> = async (context: Context) => {
  const axiosInstance = await context.client.AxiosInstance;

  const auth: AuthenticateResponse = await context.config.state.getAuthentication();
  let token = null;
  if (auth) {
    token = auth.token;
  } else {
    const authenticateApi = new AuthenticateApi(null, context.config.api.url, axiosInstance);
    const authResponse = await authenticateApi.apiFrontendAuthenticateGetTokenPost({
      is_guest: true
    });

    if (authResponse && authResponse.data) {
      await context.config.state.setAuthentication(authResponse.data);
      token = authResponse.data.token;
    }
  }

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return axiosInstance;
};

export default getClientInstance;
