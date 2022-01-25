export * from './../../gen/model';

export * from './Api';
export * from './AuthenticationToken';
export * from './ClientInstance';
export * from './Configuration';
export * from './Context';

import { CatalogProductsModelDto, ProductDetailsModelDto, CategoryModelDto } from './';

export type TODO = unknown;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = TODO;

export type Coupon = TODO;

/* eslint-disable camelcase */
export type Facet = {
  template_view_path: string | null;
  catalog_products_model: CatalogProductsModelDto;
  catalog_model: CategoryModelDto;
  products: Array<ProductDetailsModelDto>;
};
/* eslint-enable camelcase */

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type PasswordResetResult = TODO;

export type Product = TODO;

export type ProductFilter = TODO;

export type Review = TODO;

export type ReviewItem = TODO;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;

// MAJAKO_CHANGE
export type ReturnRequest = TODO;
export type ReturnRequestItem = TODO;
export type ReturnRequestReason = TODO;
export type ReturnRequestAction = TODO;
