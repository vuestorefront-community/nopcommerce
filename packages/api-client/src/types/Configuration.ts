import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { NopCommerceApiMethods } from './';

import { AuthenticateResponse } from './../types';

export type State = {
  getAuthentication: () => AuthenticateResponse;
  setAuthentication: (auth: AuthenticateResponse) => void;
};

export interface Cookie {
  name: string;
  httpOnly: boolean;
  maxAge: number;
}

export interface ClientConfiguration {
  api: {
    url: string;
  };
  cookies: {
    authenticationCookie: Cookie;
  };
  state: State;
}

export interface Configuration extends ClientConfiguration {
  client?: AxiosInstance;
  customOptions?: AxiosRequestConfig;
  overrides: NopCommerceApiMethods;
}
