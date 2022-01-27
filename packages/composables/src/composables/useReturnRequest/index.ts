import { Context } from '@vue-storefront/core';
import { SubmitReturnRequestModelDto } from '@vue-storefront/nopcommerce-api/gen';
import { useReturnRequestFactory, UseReturnRequestParams } from '../../factories/useReturnRequestFactory';

const params: UseReturnRequestParams<SubmitReturnRequestModelDto> = {
  getReturnRequest: async (context: Context, { orderId }) => {
    const response: SubmitReturnRequestModelDto = await context.$nopcommerce.api.returnRequestReturnRequestOrderIdGet({ orderId });
    return response;
  },
  submitReturnRequest: async (
    context: Context, { returnRequest, form }) => {
    returnRequest.return_request_reason_id = parseInt(form.reasonId);
    returnRequest.return_request_action_id = parseInt(form.actionId);
    const requestForm = {};
    Object.keys(form.items).forEach(key => requestForm[`quantity${form.items[key].id}`] = form.items[key].quantity);
    const request = {
      orderId: returnRequest.order_id,
      submitReturnRequestModelDtoBaseModelDtoRequest: {
        model: returnRequest,
        form: requestForm
      }
    };
    await context.$nopcommerce.api.returnRequestReturnRequestSubmitOrderIdPost(request);
  },
  load: async (context: Context) => {
    const response = await context.$nopcommerce.api.returnRequestCustomerReturnRequestsGet();
    return response.items;
  }
};

export const useReturnRequest = useReturnRequestFactory<SubmitReturnRequestModelDto>(params);
