import {
  Context,
  useMakeOrderFactory,
  UseMakeOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/nopcommerce-api';
import { ConfirmOrderResponse } from '@vue-storefront/nopcommerce-api/gen';

const factoryParams: UseMakeOrderFactoryParams<Order> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  make: async (context: Context, { customQuery }) => {
    console.log('Mocked: useMakeOrder.make');
    await context.$nopcommerce.api.checkoutSelectPaymentMethodPost({paymentMethod: 'Payments.CheckMoneyOrder'});
    const model: ConfirmOrderResponse = await context.$nopcommerce.api.checkoutConfirmOrderGet();
    return model;
  }
};

export const useMakeOrder = useMakeOrderFactory<Order>(factoryParams);
