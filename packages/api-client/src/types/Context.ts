import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { ClientInstance, Configuration, NopCommerceApiMethods } from './';

export type Context = IntegrationContext<ClientInstance, Configuration, ApiClientMethods<NopCommerceApiMethods>>;
