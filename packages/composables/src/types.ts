import { ProductsSearchParams } from '@vue-storefront/core';
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
