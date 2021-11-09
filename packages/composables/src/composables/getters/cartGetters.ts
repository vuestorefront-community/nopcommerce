import {
  CartGetters as BaseCartGetters,
  AgnosticTotals as BaseAgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute
} from '@vue-storefront/core';
import { MiniShoppingCartModelDto, MiniShoppingCartItemModelDto } from '@vue-storefront/nopcommerce-api/gen';

export interface AgnosticTotals extends Omit<BaseAgnosticTotals, 'total' | 'subtotal' | 'special'> {
  total: string;
  subtotal: string;
  special?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(cart: MiniShoppingCartModelDto): MiniShoppingCartItemModelDto[] {
  return cart && cart.items ? cart.items : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: MiniShoppingCartItemModelDto): string {
  return item && item.product_name ? item.product_name : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item: MiniShoppingCartItemModelDto): string {
  return item && item.picture && item.picture.image_url ? item.picture.image_url : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: MiniShoppingCartItemModelDto): string {
  return item && item.unit_price ? item.unit_price : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: MiniShoppingCartItemModelDto): number {
  return item && item.quantity ? item.quantity : 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(item: MiniShoppingCartItemModelDto, filterByAttributeName?: Array<string>): Record<string, AgnosticAttribute | string> {
  return {
    attribute: item && item.attribute_info ? item.attribute_info : ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: MiniShoppingCartItemModelDto): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(cart: MiniShoppingCartModelDto): AgnosticTotals {
  return {
    total: cart && cart.sub_total ? cart.sub_total : '',
    subtotal: cart && cart.sub_total ? cart.sub_total : '',
    special: ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(cart: MiniShoppingCartModelDto): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems(cart: MiniShoppingCartModelDto): number {
  return cart && cart.items ? cart.items.reduce<number>((prev: number, curr: MiniShoppingCartItemModelDto) => prev + curr.quantity, 0) : 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoupons(cart: MiniShoppingCartModelDto): AgnosticCoupon[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscounts(cart: MiniShoppingCartModelDto): AgnosticDiscount[] {
  return [];
}

export interface CartGetters<MiniShoppingCartModelDto, MiniShoppingCartItemModelDto>
  extends Omit<BaseCartGetters<MiniShoppingCartModelDto, MiniShoppingCartItemModelDto>, 'getItemPrice'> {
  getItemPrice: (item: MiniShoppingCartItemModelDto) => string;
}

export const cartGetters: CartGetters<MiniShoppingCartModelDto, MiniShoppingCartItemModelDto> = {
  getTotals,
  getShippingPrice,
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getDiscounts
};
