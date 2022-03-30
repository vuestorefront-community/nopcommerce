import { Context, CustomQuery } from '@vue-storefront/core';
import { SearchProductsResponse, SearchRequest } from '@vue-storefront/nopcommerce-api/gen';
import { useSearchFactory, UseSearchFactoryParams } from '@vue-storefront/core';

const params: UseSearchFactoryParams<any, SearchRequest> = {
  search: async (context: Context, { customQuery }: { customQuery: CustomQuery }) => {
    const searchRequest: SearchRequest = {
      model: {
        q: customQuery.q,
        advs: true,
        sid: true
      },
      command: {
        page_index: 0,
        page_number: 1,
        page_size: 20,
        order_by: -1
      }
    };

    const response: SearchProductsResponse = await context.$nopcommerce.api.catalogSearchProductsPost({
      searchRequest: searchRequest });
    return {
      products: response.catalog_products_model.products,
      categories: []
    };
  }
};

export const useSearch = useSearchFactory<SearchProductsResponse, SearchRequest>(params);
