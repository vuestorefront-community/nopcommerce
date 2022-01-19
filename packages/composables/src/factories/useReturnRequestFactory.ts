import { configureFactoryParams, FactoryParams, PlatformApi, sharedRef, Logger, Context } from '@vue-storefront/core';
import { computed, Ref } from '@vue/composition-api';
import { UseReturnRequest, UseReturnRequestErrors } from '../types';

export interface UseReturnRequestParams<RETURN_REQUEST, API extends PlatformApi = any> extends FactoryParams<API> {
  getReturnRequest: (context: Context, params: { orderId: number }) => Promise<RETURN_REQUEST>;
}

export const useReturnRequestFactory = <RETURN_REQUEST, API extends PlatformApi = any>(
  factoryParams: UseReturnRequestParams<API>
) => {
  return function useReturnRequest(): UseReturnRequest<RETURN_REQUEST, API> {
    const loading = sharedRef(false, 'useReturnRequest-loading');
    const error: Ref<UseReturnRequestErrors> = sharedRef({
      load: null
    }, 'useReturnRequest-error');

    const _factoryParams = configureFactoryParams(
      factoryParams,
      { alias: 'currentReturnRequest', loading, error }
    );

    const getReturnRequest = async ({ orderId }): Promise<RETURN_REQUEST> => {
      Logger.debug('useReturnRequest.load', { orderId });

      let result: RETURN_REQUEST = null;

      try {
        loading.value = true;
        result = await _factoryParams.getReturnRequest({
          orderId
        });
        error.value.load = null;
      } catch (err) {
        error.value.load = err;
        Logger.error('useReturnRequest/load', err);
      } finally {
        loading.value = false;
      }

      return result;
    };

    return {
      api: _factoryParams.api,
      getReturnRequest,
      loading: computed(() => loading.value),
      error: computed(() => error.value)
    };
  };
};
