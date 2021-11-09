import { integrationPlugin } from '@vue-storefront/core';
import defaultConfig from '@vue-storefront/nopcommerce/nuxt/defaultConfig';
import cookie from '@vue-storefront/nopcommerce/nuxt/cookie';
import { mapConfigToSetupObject } from '@vue-storefront/nopcommerce/nuxt/helpers';

const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>');

export default integrationPlugin(({ app, res, req, integration }) => {
  const customerCookieName = moduleOptions.cookies?.customerCookieName || defaultConfig.cookies.customerCookieName;
  const authenticationCookieName = moduleOptions.cookies?.authenticationCookieName || defaultConfig.cookies.authenticationCookieName;
  const { setCookie, removeCookie, getCookies } = cookie(req, res);
  const getCurrentCustomer = async () => {
    const authenticationCookie = JSON.parse(getCookies(authenticationCookieName));
    if (authenticationCookie) {
      return authenticationCookie;
    } else {
      const authenticateCustomerRequest = {
        is_guest: true,
        username: null,
        email: null,
        password: null
      };
      const auth = await app.$vsf.$nopcommerce.api.getToken({ authenticateCustomerRequest });
      setCookie(authenticationCookieName, JSON.stringify(auth));
    }

    //const customer = await app.$vsf.$nopcommerce.api.info({ authenticateCustomerRequest });
  };
  const getCustomerToken = () => getCookies(customerCookieName);

  const setCustomerToken = (token) => {
    if (!token) {
      removeCookie(customerCookieName);
      return;
    }

    setCookie(customerCookieName, token);
  };

  const settings = mapConfigToSetupObject({
    moduleOptions,
    app,
    additionalProperties: {
      state: {
        getCurrentCustomer,
        getCustomerToken,
        setCustomerToken
      }
    }
  });

  integration.configure('nopcommerce', settings);
});
