import {
  Context,
  FacetSearchResult,
  useFacetFactory
} from '@vue-storefront/core';
import type { CatalogProductsCommandDto, CategoryResponse, UrlRecordDto } from '@vue-storefront/nopcommerce-api/gen';

const factoryParams = {
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

    const rootCategoryResponse : CategoryResponse = await context.$nopcommerce.api.catalogGetCategoryCategoryIdPost({categoryId: urlRecordDto.entity_id, catalogProductsCommandDto: criterias});

    return {
      catalog_model: rootCategoryResponse.category_model_dto,
      catalog_products_model: rootCategoryResponse.category_model_dto.catalog_products_model,
      products: rootCategoryResponse.category_model_dto.catalog_products_model.products,
      template_view_path: rootCategoryResponse.template_view_path
    };
  }
};

export const useFacet = useFacetFactory<any>(factoryParams);
