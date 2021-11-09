import {
  Context,
  FacetSearchResult,
  useFacetFactory
} from '@vue-storefront/core';
import type { CatalogProductsCommandDto, CategoryResponse, GetCategoryProductsResponse, ProductDetailsModelDto, ProductDetailsResponse, UrlRecordDto } from '@vue-storefront/nopcommerce-api/gen';

const factoryParams = {

  /* TODO: Many API called in search function. Need to find solution to reduce API call */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params?: FacetSearchResult<CatalogProductsCommandDto>) => {
    const criterias: CatalogProductsCommandDto = {
      order_by: params.input.order,
      page_number: params.input.page,
      page_size: params.input.pagesize,
      specification_option_ids: params.input.specs,
      view_mode: params.input.viewmode
    };

    const urlRecordDto : UrlRecordDto = await context.$nopcommerce.api.urlRecordGetBySlugGet({slug: params.input.term});

    const rootCategoryResponse : CategoryResponse = await context.$nopcommerce.api.catalogGetCategoryCategoryIdPost({categoryId: urlRecordDto.entity_id});

    const rootCategoryProductsResponse:GetCategoryProductsResponse = await context.$nopcommerce.api.catalogGetCategoryProductsCategoryIdPost({categoryId: urlRecordDto.entity_id, catalogProductsCommandDto: criterias});

    const products = new Array<ProductDetailsModelDto>();

    for (const productOverview of rootCategoryProductsResponse.catalog_products_model.products) {
      const response: ProductDetailsResponse = await context.$nopcommerce.api.productGetProductDetailsProductIdGet({productId: productOverview.id});
      products.push(response.product_details_model);
    }

    return {
      catalog_model: rootCategoryResponse.category_model_dto,
      catalog_products_model: rootCategoryProductsResponse.catalog_products_model,
      products: products,
      template_view_path: rootCategoryProductsResponse.template_view_path
    };
  }
};

export const useFacet = useFacetFactory<any>(factoryParams);
