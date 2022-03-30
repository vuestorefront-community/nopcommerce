import { useStoreFactory, UseStoreFactoryParams } from '@vue-storefront/core';

const params: UseStoreFactoryParams<any> = {
  async change() {},
  async load() {}
};

export const useStore = useStoreFactory<any>(params);
