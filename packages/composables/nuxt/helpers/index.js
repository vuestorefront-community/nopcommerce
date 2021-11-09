import defaultConfig from '@vue-storefront/nopcommerce/nuxt/defaultConfig';

export const mapConfigToSetupObject = ({ moduleOptions, app, additionalProperties = {} }) => ({
  ...defaultConfig,
  ...moduleOptions,
  ...additionalProperties
});
