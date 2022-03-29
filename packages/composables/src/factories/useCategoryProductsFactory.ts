import { CustomQuery, Context, FactoryParams, PlatformApi } from '@vue-storefront/core';
import { Ref, computed } from '@nuxtjs/composition-api';
import { sharedRef, Logger, configureFactoryParams } from '@vue-storefront/core';
import { UseCategoryProducts, UseCategoryProductsErrors } from '../types/UseCategoryProducts';

export interface UseCategoryProductsFactoryParams<GetCategoryProductsResponse, CategoryProductsSearchParams, API extends PlatformApi = any>
  extends FactoryParams<API> {
  categoryProductsSearch: (
    context: Context,
    params: CategoryProductsSearchParams & { customQuery?: CustomQuery }
  ) => Promise<GetCategoryProductsResponse>;
}

export function useCategoryProductsFactory<GetCategoryProductsResponse, CategoryProductsSearchParams, API extends PlatformApi = any>(
  factoryParams: UseCategoryProductsFactoryParams<GetCategoryProductsResponse, CategoryProductsSearchParams, API>
) {
  return function useCategoryProducts(id: string): UseCategoryProducts<GetCategoryProductsResponse, CategoryProductsSearchParams, API> {
    const categoryProducts: Ref<GetCategoryProductsResponse> = sharedRef([], `useCategory-categories-${id}`);
    const loading = sharedRef(false, `useCategory-loading-${id}`);
    const error: Ref<UseCategoryProductsErrors> = sharedRef(
      {
        search: null
      },
      `useCategory-error-${id}`
    );

    const _factoryParams = configureFactoryParams(factoryParams, {
      mainRef: categoryProducts,
      alias: 'currentCategoryProducts',
      loading,
      error
    });

    const search = async (searchParams) => {
      Logger.debug(`useCategoryProducts/${id}/search`, searchParams);

      try {
        loading.value = true;
        categoryProducts.value = await _factoryParams.categoryProductsSearch(searchParams);
        error.value.search = null;
      } catch (err) {
        error.value.search = err;
        Logger.error(`useCategoryProducts/${id}/search`, err);
      } finally {
        loading.value = false;
      }
    };

    return {
      api: _factoryParams.api,
      search,
      loading: computed(() => loading.value),
      categories: computed(() => categoryProducts.value),
      error: computed(() => error.value)
    };
  };
}
