import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import { GetCategoryProductsResponse, ProductDetailsModelDto, ProductDetailsResponse, UrlRecordDto } from '@vue-storefront/nopcommerce-api/lib/src/types';
import type {
  UseProductSearchParams as SearchParams
} from '../../types';

const getProductById = async (context: Context, id: number) => {
  const response: ProductDetailsResponse = await context.$nopcommerce.api.productGetProductDetailsProductIdGet({productId: id});
  return response.product_details_model;
};

const getProductIdFromParams = async (context: Context, params): Promise<number> => {
  if (params.id) {
    return params.id;
  } else if (params.path) {
    const urlRecordDto : UrlRecordDto = await context.$nopcommerce.api.urlRecordGetBySlugGet({slug: params.path});
    return urlRecordDto.entity_id;
  }
};

const params: UseProductFactoryParams<ProductDetailsModelDto[], SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    const productId: number = await getProductIdFromParams(context, params);
    if (productId) {
      const productDetail = await getProductById(context, productId);
      return [productDetail];
    } else if (params.catId) {
      const categoryProductsResponse: GetCategoryProductsResponse = await context.$nopcommerce.api.catalogGetCategoryProductsCategoryIdPost({categoryId: params.catId, catalogProductsCommandDto: {total_items: params.limit}});
      return categoryProductsResponse.catalog_products_model.products;
    }
    return await [];
  }
};

export const useProduct = useProductFactory<ProductDetailsModelDto[], SearchParams>(params);
