import { WishlistGetters as BaseWishlistGetters, AgnosticAttribute, AgnosticTotals as BaseAgnosticTotals } from '@vue-storefront/core';
import { WishlistModelDto, ShoppingCartItemModel } from '@vue-storefront/nopcommerce-api/gen';

export interface AgnosticTotals extends Omit<BaseAgnosticTotals, 'total' | 'subtotal' | 'special'> {
  total: string;
  subtotal: string;
  special?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(wishlist: WishlistModelDto): ShoppingCartItemModel[] {
  return wishlist && wishlist.items ? wishlist.items : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(wishlist: WishlistModelDto): AgnosticTotals {
  return {
    total: '',
    subtotal: ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: ShoppingCartItemModel): string {
  return item && item.product_name ? item.product_name : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item: ShoppingCartItemModel): string {
  return item && item.picture && item.picture.image_url ? item.picture.image_url : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: ShoppingCartItemModel): string {
  return item && item.unit_price ? item.unit_price : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: ShoppingCartItemModel): number {
  return item && item.quantity ? item.quantity : 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(item: ShoppingCartItemModel, filters?: string[]): Record<string, AgnosticAttribute | string> {
  return {
    attribute: item && item.attribute_info ? item.attribute_info : ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: ShoppingCartItemModel): string {
  return item && item.sku ? item.sku : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(wishlist: WishlistModelDto): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems(wishlist: WishlistModelDto): number {
  return wishlist && wishlist.items ? wishlist.items.reduce<number>((prev: number, curr: ShoppingCartItemModel) => prev + curr.quantity, 0) : 0;
}

export interface WishlistGetters<WishlistModelDto, ShoppingCartItemModel>
  extends Omit<BaseWishlistGetters<WishlistModelDto, ShoppingCartItemModel>, 'getItemPrice'> {
  getItemPrice: (item: ShoppingCartItemModel) => string;
}

export const wishlistGetters: WishlistGetters<WishlistModelDto, ShoppingCartItemModel> = {
  getItems,
  getTotals,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getShippingPrice,
  getItemSku,
  getTotalItems
};
