import {
  AgnosticBreadcrumb,
  AgnosticCategoryTree,
  AgnosticFacet,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  FacetSearchResult,
  FacetsGetters
} from '@vue-storefront/core';
import type {
  Facet,
  FacetSearchCriteria
} from '@vue-storefront/nopcommerce-api/src';
import type {
  CatalogProductsCommandDto,
  ProductDetailsModelDto
} from '@vue-storefront/nopcommerce-api/gen/model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params: FacetSearchResult<Facet>, criteria?: CatalogProductsCommandDto): AgnosticFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(params: FacetSearchResult<Facet>, criteria?: CatalogProductsCommandDto): AgnosticGroupedFacet[] {
  if (!params || !params.data || !params.data.catalog_products_model || !params.data.catalog_products_model.specification_filter) return [];

  return params.data.catalog_products_model.specification_filter.attributes.map((attribute)=> {
    return {
      id: attribute.id.toString(),
      label: attribute.name,
      count: 0,
      options: attribute.values.map((value)=>{
        return {
          type: '',
          id: value.id.toString(),
          value: value.name,
          attrName: value.name,
          count: 0,
          selected: value.selected,
          metadata: ''
        };
      })
    };
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(params: FacetSearchResult<Facet>): AgnosticSort {
  return {
    options: (params && params.data && params.data.catalog_products_model)
      ? params.data.catalog_products_model.available_sort_options.map(
        (option) => {
          return {
            type: '',
            id: option.value,
            value: option.text,
            attrName: option.text,
            count: params.data.catalog_products_model.available_sort_options.length,
            selected: option.selected,
            metadata: option.text
          };
        })
      : [],
    selected: params && params.data && params.data.catalog_products_model && params.data.catalog_products_model.order_by
      ? params.data.catalog_products_model.order_by.toString()
      : ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params: FacetSearchResult<Facet>): AgnosticCategoryTree {
  if (params && params.data && params.data.catalog_model) {
    const subCategories: Array<AgnosticCategoryTree> = params.data.catalog_model.sub_categories
      ? params.data.catalog_model.sub_categories.map(
        (subCategory) => {
          return {
            label: subCategory.name,
            slug: subCategory.se_name,
            items: [],
            isCurrent: false,
            count: 0,
            category_id: subCategory.id
          };
        })
      : [];

    return {
      label: params.data.catalog_model.name,
      slug: `/${params.data.catalog_model.id}/${params.data.catalog_model.se_name}`,
      items: subCategories,
      isCurrent: false,
      count: 0,
      category_id: params.data.catalog_model.id
    };
  }

  return {
    label: '',
    slug: '',
    items: [],
    isCurrent: false,
    count: 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProducts(params: FacetSearchResult<Facet>): Array<ProductDetailsModelDto> {
  return params && params.data && params.data.products ? params.data.products : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(params: FacetSearchResult<Facet>): AgnosticPagination {
  if (!params || !params.data || !params.data.catalog_products_model) {
    return {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 0,
      pageOptions: []
    };
  }
  return {
    currentPage: params.data.catalog_products_model.page_number,
    totalPages: params.data.catalog_products_model.total_pages,
    totalItems: params.data.catalog_products_model.total_items,
    itemsPerPage: params.data.catalog_products_model.page_size,
    pageOptions: params.data.catalog_products_model.page_size_options.map((option)=>parseInt(option.value))
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params: FacetSearchResult<Facet>): AgnosticBreadcrumb[] {
  if (!params || !params.data) {
    return [];
  }

  return [
    { text: 'Home', link: '/' },
    ...params.data.catalog_model.category_breadcrumb.map(b => ({ text: b.name, link: `/c/${b.se_name}` }))
  ];
}

export const facetGetters: FacetsGetters<Facet, FacetSearchCriteria> = {
  getAll,
  getBreadcrumbs,
  getCategoryTree,
  getGrouped,
  getPagination,
  getProducts,
  getSortOptions
};
