import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { ClientInstance, Configuration, NopCommerceApiMethods } from '@vue-storefront/nopcommerce-api';

declare module '@vue-storefront/core' {
  export interface Context {
    $nopcommerce: IntegrationContext<ClientInstance, Configuration, ApiClientMethods<NopCommerceApiMethods>>;
  }
}
