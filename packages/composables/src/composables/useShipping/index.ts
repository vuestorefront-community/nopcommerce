import {
  Context,
  useShippingFactory,
  UseShippingParams
} from '@vue-storefront/core';
import type { ShippingAddress } from '@vue-storefront/nopcommerce-api';
import type {
  UseShippingAddParams as AddParams
} from '../../types';
import { ShippingAddressResponse, NewShippingAddressResponse, CheckoutShippingAddressModelDtoBaseModelDtoRequest } from '@vue-storefront/nopcommerce-api/gen';

const params: UseShippingParams<ShippingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: useShipping.load');
    const shippingAddress: ShippingAddressResponse = await context.$nopcommerce.api.checkoutShippingAddressGet();
    if (shippingAddress && shippingAddress.model.existing_addresses.length > 0) {
      return shippingAddress.model.existing_addresses[0];
    }
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingDetails, customQuery }) => {
    console.log('Mocked: useShipping.save');
    const checkoutShippingAddressModelDtoBaseModelDtoRequest = {
      model: {
        shipping_new_address: {
          first_name: shippingDetails.firstName,
          last_name: shippingDetails.lastName,
          email: shippingDetails.email,
          address1: shippingDetails.apartment + shippingDetails.streetName,
          city: shippingDetails.city,
          state: shippingDetails.state,
          country: shippingDetails.country,
          zip_postal_code: shippingDetails.postalCode,
          phone_number: shippingDetails.phone
        }
      },
      form: {}

    } as CheckoutShippingAddressModelDtoBaseModelDtoRequest;
    const shippingAddress: NewShippingAddressResponse = await context.$nopcommerce.api.checkoutNewShippingAddressPost({checkoutShippingAddressModelDtoBaseModelDtoRequest});

    if (shippingAddress && shippingAddress.model.existing_addresses.length > 0) {
      return shippingAddress.model.existing_addresses[0];
    }
    return {};
  }
};

export const useShipping = useShippingFactory<ShippingAddress, AddParams>(params);
