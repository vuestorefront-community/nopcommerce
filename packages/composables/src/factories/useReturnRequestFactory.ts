import { configureFactoryParams, FactoryParams, PlatformApi, sharedRef, Logger, Context } from '@vue-storefront/core';
import { computed, Ref } from '@vue/composition-api';
import { UseReturnRequest, UseReturnRequestErrors } from '../types';

export interface UseReturnRequestParams<RETURN_REQUEST, API extends PlatformApi = any> extends FactoryParams<API> {
  getReturnRequest: (context: Context, params: { orderId: number }) => Promise<RETURN_REQUEST>;
  submitReturnRequest: (context: Context, params: { returnRequest: RETURN_REQUEST, form: any }) => Promise<void>;
  load: (context: Context) => Promise<void>;
}

export const useReturnRequestFactory = <RETURN_REQUEST, API extends PlatformApi = any>(
  factoryParams: UseReturnRequestParams<API>
) => {
  return function useReturnRequest(): UseReturnRequest<RETURN_REQUEST, API> {
    const returnRequests: Ref<RETURN_REQUEST> = sharedRef([], 'useReturnRequest-returnRequests');
    const loading = sharedRef(false, 'useReturnRequest-loading');
    const error: Ref<UseReturnRequestErrors> = sharedRef({
      getReturnRequest: null,
      submitReturnRequest: null,
      load: null
    }, 'useReturnRequest-error');

    const _factoryParams = configureFactoryParams(
      factoryParams,
      { mainRef: returnRequests, alias: 'currentReturnRequest', loading, error }
    );

    const getReturnRequest = async ({ orderId }): Promise<RETURN_REQUEST> => {
      Logger.debug('useReturnRequest.getReturnRequest', { orderId });

      let result: RETURN_REQUEST = null;

      try {
        loading.value = true;
        result = await _factoryParams.getReturnRequest({
          orderId
        });
        error.value.getReturnRequest = null;
      } catch (err) {
        error.value.getReturnRequest = err;
        Logger.error('useReturnRequest/getReturnRequest', err);
      } finally {
        loading.value = false;
      }

      return result;
    };

    const submitReturnRequest = async ({ returnRequest, form }): Promise<void> => {
      Logger.debug('useReturnRequest.submitReturnRequest', { returnRequest, form });

      try {
        loading.value = true;
        await _factoryParams.submitReturnRequest({
          returnRequest,
          form
        });
        error.value.submitReturnRequest = null;
      } catch (err) {
        error.value.submitReturnRequest = err;
        Logger.error('useReturnRequest/submitReturnRequest', err);
      } finally {
        loading.value = false;
      }
    };

    const load = async (): Promise<void> => {
      Logger.debug('useReturnRequest.load');

      try {
        loading.value = true;
        returnRequests.value = await _factoryParams.load();
        error.value.load = null;
      } catch (err) {
        error.value.load = err;
        Logger.error('useReturnRequest/load', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      api: _factoryParams.api,
      getReturnRequest,
      submitReturnRequest,
      load,
      returnRequests: computed(() => returnRequests.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value)
    };
  };
};
