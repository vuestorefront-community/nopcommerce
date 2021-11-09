import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import { CategorySimpleModelDto } from '@vue-storefront/nopcommerce-api/gen';

import type {
  UseCategorySearchParams as SearchParams
} from '../../types';

const params: UseCategoryFactoryParams<CategorySimpleModelDto, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categorySearch: async (context: Context, { customQuery, ...params }) => {
    const categorySimpleList: Array<CategorySimpleModelDto> = await context.$nopcommerce.api.catalogGetCatalogRootGet();
    return categorySimpleList ? categorySimpleList.filter((category)=>category.include_in_top_menu) : [];
  }
};

export const useCategory = useCategoryFactory<CategorySimpleModelDto, SearchParams>(params);
