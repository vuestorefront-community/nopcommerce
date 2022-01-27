import { ReturnRequestGetters } from '../../types';
import type { ReturnRequest, ReturnRequestItem, ReturnRequestReason, ReturnRequestAction } from '@vue-storefront/nopcommerce-api';

const getId = (returnRequest: ReturnRequest): string => returnRequest.id;
const getOrderId = (returnRequest: ReturnRequest): string => returnRequest.custom_order_number;
const getItems = (returnRequest: ReturnRequest): ReturnRequestItem[] => returnRequest.items;
const getAvailableReturnReasons = (returnRequest: ReturnRequest): ReturnRequestReason[] => returnRequest.available_return_reasons;
const getAvailableReturnActions = (returnRequest: ReturnRequest): ReturnRequestAction[] => returnRequest.available_return_actions;
const getReason = (returnRequest: ReturnRequest): string => returnRequest.return_reason;
const getAction = (returnRequest: ReturnRequest): string => returnRequest.return_action;
const getDate = (returnRequest: ReturnRequest): string => new Date(returnRequest.created_on).toLocaleDateString() || '';
const getComments = (returnRequest: ReturnRequest): string => returnRequest.comments;
const getTitle = (returnRequest: ReturnRequest): string => `#${returnRequest.id} - ${returnRequest.return_request_status}`;
const getItemId = (item: ReturnRequestItem): number => item.id;
const getItemName = (item: ReturnRequestItem): string => item.product_name;
const getItemQty = (item: ReturnRequestItem): number => item.quantity;
const getItemPrice = (item: ReturnRequestItem): string => item.unit_price;
const getItemSku = (): string => '';
const getReturnReasonName = (returnReason: ReturnRequestReason): string => returnReason.name;
const getReturnReasonId = (returnReason: ReturnRequestReason): number => returnReason.id;
const getReturnActionName = (returnAction: ReturnRequestAction): string => returnAction.name;
const getReturnActionId = (returnAction: ReturnRequestAction): number => returnAction.id;

export const returnRequestGetters: ReturnRequestGetters<ReturnRequest, ReturnRequestItem, ReturnRequestReason, ReturnRequestAction> = {
  getId,
  getOrderId,
  getItems,
  getAvailableReturnReasons,
  getAvailableReturnActions,
  getReason,
  getAction,
  getDate,
  getComments,
  getTitle,
  getItemId,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getReturnReasonName,
  getReturnReasonId,
  getReturnActionName,
  getReturnActionId
};
