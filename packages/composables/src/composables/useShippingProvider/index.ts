import { useShippingProviderFactory, UseShippingProviderParams, Context } from '@vue-storefront/core';
import type { ShippingProvider, ShippingMethod } from '@vue-storefront/nopcommerce-api';
import { CheckoutRedirectResponse, ShippingMethodResponse } from '@vue-storefront/nopcommerce-api/gen';

const params: UseShippingProviderParams<ShippingProvider, ShippingMethod> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: loadShippingProvider');
    const shippingMethodResponse: ShippingMethodResponse = await context.$nopcommerce.api.checkoutShippingMethodGet();

    if (shippingMethodResponse) {
      return shippingMethodResponse.model;
    }
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingMethod, customQuery }) => {
    console.log('Mocked: saveShippingProvider');
    const shippingOption = shippingMethod;
    const checkoutRedirectResponse: CheckoutRedirectResponse = await context.$nopcommerce.api.checkoutSelectShippingMethodPost({shippingOption});

    if (checkoutRedirectResponse) {
      return checkoutRedirectResponse;
    }
    return {};
  }
};

export const useShippingProvider = useShippingProviderFactory<ShippingProvider, ShippingMethod>(params);
