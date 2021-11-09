import { ApiClientExtension, apiClientFactory } from '@vue-storefront/core';
import type { NopCommerceApiMethods, Configuration, ClientInstance } from './types/index';
import axios, {AxiosInstance} from 'axios';
import { defaultConfiguration } from './helpers/apiClient/defaultSettings';

import { AuthenticateResponse } from './../gen';
import * as api from './api';

import generate from './utilities/generateWrappedApis';

function initClient(configuration: Configuration) {
  const authData : AuthenticateResponse = configuration.state.getAuthentication();

  let axiosInstance: AxiosInstance;
  if (authData) {
    axiosInstance = axios.create({
      baseURL: configuration.api.url,
      headers: {
        Authorization: `Bearer ${authData.token}`
      }
    });
  } else {
    axiosInstance = axios.create({
      baseURL: configuration.api.url
    });
  }

  return {
    AxiosInstance: axiosInstance
  } as ClientInstance;
}

function onCreate(configuration: Configuration) {
  const config = {
    ...defaultConfiguration,
    ...configuration
  };

  const client = initClient(config);
  return {
    config,
    client
  };
}

const authenticationExtension: ApiClientExtension = {
  name: 'authenticationExtension',
  hooks: (req, res) => ({
    beforeCreate: ({ configuration } : {configuration: Configuration}) : Configuration => {
      const authenticationCookie = configuration.cookies?.authenticationCookie || defaultConfiguration.cookies.authenticationCookie;
      const setAuthentication = (authData)=>{
        if (!authData || Object.keys(authData).length === 0) {
          // eslint-disable-next-line no-param-reassign
          delete req.cookies[authenticationCookie.name];
          return;
        }

        res.cookie(authenticationCookie.name, JSON.stringify(authData), {
          httpOnly: authenticationCookie.httpOnly,
          maxAge: authenticationCookie.maxAge
        });
      };

      const getAuthentication = ()=>{
        const cookie = req.cookies[authenticationCookie.name];
        let authData = null;

        if (cookie) {
          const data = JSON.parse(cookie);
          if (Object.keys(data).length > 0) {
            authData = data;
          }
        }

        return authData;
      };

      return {
        ...configuration,
        state: {
          getAuthentication,
          setAuthentication
        }
      };
    }
  })
};

const { createApiClient } = apiClientFactory<Configuration, NopCommerceApiMethods>({
  onCreate,
  api,
  extensions: [authenticationExtension]
});

export {
  createApiClient,
  generate
};

