import {
  Context,
  useBillingFactory,
  UseBillingParams
} from '@vue-storefront/core';
import type { BillingAddress } from '@vue-storefront/nopcommerce-api';
import type {
  UseBillingAddParams as AddParams
} from '../../types';

import { CheckoutBillingAddressModelDto, NewBillingAddressResponse, CheckoutBillingAddressModelDtoBaseModelDtoRequest } from '@vue-storefront/nopcommerce-api/gen';

const params: UseBillingParams<BillingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const requestBody: { [key: string]: string; } = {};
    const billingAddress: CheckoutBillingAddressModelDto = await context.$nopcommerce.api.checkoutBillingAddressPost({requestBody});

    if (billingAddress && billingAddress.existing_addresses.length > 0) {
      return billingAddress.existing_addresses[0];
    }
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { params, billingDetails, customQuery }) => {
    if (billingDetails) {
      const checkoutBillingAddressModelDtoBaseModelDtoRequest = {
        model: {
          billing_new_address: {
            first_name: billingDetails.firstName ? billingDetails.firstName : '',
            last_name: billingDetails.lastName ? billingDetails.lastName : '',
            email: billingDetails.email ? billingDetails.email : '',
            address1: (billingDetails.apartment || billingDetails.streetName) ? billingDetails.apartment + billingDetails.streetName : '',
            city: billingDetails.city ? billingDetails.city : '',
            state: billingDetails.state ? billingDetails.state : '',
            country: billingDetails.country ? billingDetails.country : '',
            zip_postal_code: billingDetails.postalCode ? billingDetails.postalCode : '',
            phone_number: billingDetails.phone ? billingDetails.phone : ''
          }
        },
        form: {}

      } as CheckoutBillingAddressModelDtoBaseModelDtoRequest;
      const billingAddress: NewBillingAddressResponse = await context.$nopcommerce.api.checkoutNewBillingAddressPost({checkoutBillingAddressModelDtoBaseModelDtoRequest});

      return (billingAddress && billingAddress.model && billingAddress.model.existing_addresses && billingAddress.model.existing_addresses.length > 0)
        ? billingAddress.model.existing_addresses[0]
        : {};
    } else {
      return {};
    }
  }
};

export const useBilling = useBillingFactory<BillingAddress, AddParams>(params);
