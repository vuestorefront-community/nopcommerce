import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import { GetCategoryProductsResponse, ProductDetailsModelDto, ProductDetailsResponse } from '@vue-storefront/nopcommerce-api/lib/src/types';
import type {
  UseProductSearchParams as SearchParams
} from '../../types';

const getProductById = async (context: Context, id: number) => {
  const response: ProductDetailsResponse = await context.$nopcommerce.api.productGetProductDetailsProductIdGet({productId: id});
  return response.product_details_model;
};

const params: UseProductFactoryParams<ProductDetailsModelDto[], SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    if (params.id) {
      const productDetail = await getProductById(context, params.id);
      return [productDetail];
    } else if (params.catId) {
      const categoryProductsResponse: GetCategoryProductsResponse = await context.$nopcommerce.api.catalogGetCategoryProductsCategoryIdPost({categoryId: params.catId, catalogProductsCommandDto: {total_items: params.limit}});
      const productDetails = await Promise.all(categoryProductsResponse.catalog_products_model.products.map(product=> getProductById(context, product.id)));
      return productDetails;
    }
    return await [];
  }
};

export const useProduct = useProductFactory<ProductDetailsModelDto[], SearchParams>(params);
