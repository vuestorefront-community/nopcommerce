import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/nopcommerce-api';
import { CustomerOrderListModelDto, CustomerOrderDetailsModelDto } from '@vue-storefront/nopcommerce-api/lib/src/types';
import type {
  useUserOrderSearchParams as SearchParams
} from '../../types';

const getOrderDetailsByOrderId = async (context: Context, id: number): Promise<CustomerOrderDetailsModelDto> => {
  const response: CustomerOrderDetailsModelDto = await await context.$nopcommerce.api.orderDetailsOrderIdGet({ orderId: id });
  return response;
};

const params: UseUserOrderFactoryParams<Order, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (context: Context, params) => {
    const response: CustomerOrderListModelDto = await context.$nopcommerce.api.orderCustomerOrdersGet();
    const orderDetails = await Promise.all(response.orders.map(order=> getOrderDetailsByOrderId(context, order.id)));
    return {
      results: orderDetails
    };
  }
};

export const useUserOrder = useUserOrderFactory<Order, SearchParams>(params);
