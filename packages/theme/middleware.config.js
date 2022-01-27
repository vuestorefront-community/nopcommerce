module.exports = {
  integrations: {
    nopcommerce: {
      location: '@vue-storefront/nopcommerce-api/server',
      configuration: {
        api: {
          url: 'http://localhost:5000'
        },
        cookies: {
          authenticationCookieName: 'vsf-authentication'
        }
      }
    }
  }
};
