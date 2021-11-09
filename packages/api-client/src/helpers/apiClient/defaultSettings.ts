import { ClientConfiguration } from './../../types';

export const defaultConfiguration: ClientConfiguration = {
  api: {
    url: ''
  },
  cookies: {
    authenticationCookie: {
      name: 'vsf-authentication',
      httpOnly: true,
      maxAge: 2592000000
    }
  },
  state: {
    getAuthentication: () => null,
    setAuthentication: () => {}
  }
};
