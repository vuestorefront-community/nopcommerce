import { ProductsSearchParams, PlatformApi, Composable, ComputedProperty } from '@vue-storefront/core';
import { CatalogProductsCommandDto } from '@vue-storefront/nopcommerce-api/gen';
import { Facet } from '@vue-storefront/nopcommerce-api/src';

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = TODO;

export type UseFacetSearchParams = {
  CatalogProductsCommandDto: CatalogProductsCommandDto;
  Facet: Facet;
};

export type UseProductSearchParams = ProductsSearchParams;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseUserUpdateParams = TODO;

export type UseUserRegisterParams = TODO;

export type useUserOrderSearchParams = TODO;

export interface UseReturnRequestErrors {
  getReturnRequest: Error;
  submitReturnRequest: Error;
}
export interface UseReturnRequest<
  RETURN_REQUEST,
  API extends PlatformApi = any
> extends Composable<API> {
  getReturnRequest(params: { orderId: number }): Promise<RETURN_REQUEST>;
  submitReturnRequest(params: { returnRequest: RETURN_REQUEST, form: any }): Promise<void>;
  error: ComputedProperty<UseReturnRequestErrors>;
  loading: ComputedProperty<boolean>;
}

export interface ReturnRequestGetters<RETURN_REQUEST, RETURN_REQUEST_ITEM, RETURN_REQUEST_REASON, RETURN_REQUEST_ACTION> {
  getId: (returnRequest: RETURN_REQUEST) => string;
  getItems: (returnRequest: RETURN_REQUEST) => RETURN_REQUEST_ITEM[];
  getAvailableReturnReasons: (returnRequest: RETURN_REQUEST) => RETURN_REQUEST_REASON[];
  getAvailableReturnActions: (returnRequest: RETURN_REQUEST) => RETURN_REQUEST_ACTION[];
  getItemId: (item: RETURN_REQUEST_ITEM) => number;
  getItemSku: (item: RETURN_REQUEST_ITEM) => string;
  getItemName: (item: RETURN_REQUEST_ITEM) => string;
  getItemQty: (item: RETURN_REQUEST_ITEM) => number;
  getItemPrice: (item: RETURN_REQUEST_ITEM) => string;
  getReturnReasonName: (returnReason: RETURN_REQUEST_REASON) => string;
  getReturnReasonId: (returnReason: RETURN_REQUEST_REASON) => number;
  getReturnActionName: (returnAction: RETURN_REQUEST_ACTION) => string;
  getReturnActionId: (rereturnAction: RETURN_REQUEST_ACTION) => number;
  [getterName: string]: (element: any, options?: any) => unknown;
}
