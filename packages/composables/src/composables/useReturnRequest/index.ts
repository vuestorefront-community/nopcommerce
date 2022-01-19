import { Context } from '@vue-storefront/core';
import { ReturnRequestModelDto } from '@vue-storefront/nopcommerce-api/gen';
import { useReturnRequestFactory, UseReturnRequestParams } from '../../factories/useReturnRequestFactory';

const params: UseReturnRequestParams<ReturnRequestModelDto> = {
  getReturnRequest: async (context: Context, { orderId }) => {
    const response: ReturnRequestModelDto = await context.$nopcommerce.api.returnRequestReturnRequestOrderIdGet({ orderId });
    return response;
  }
};

export const useReturnRequest = useReturnRequestFactory<ReturnRequestModelDto>(params);
