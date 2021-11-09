import { getCurrentInstance } from '@vue/composition-api';

const getInstance = () => {
  const vm = getCurrentInstance();
  return vm.$root as any;
};

const queryParamsNotFilters = ['page', 'sort', 'itemsPerPage'];

export interface UseUiHelpers {
  getFacetsFromURL: () => any;
  getCatLink: (category: any) => string;
  changeSorting: (sort: any) => void;
  changeFilters: (filters: any) => void;
  changeItemsPerPage: (itemsPerPage: any) => void;
  setTermForUrl: (term: string) => void;
  isFacetColor: (facet: any) => boolean;
  isFacetCheckbox: (facet: any) => boolean;
  getSearchTermFromUrl: () => void;
}

export const useUiHelpers: () => UseUiHelpers = () => {
  const instance = getInstance();

  const getFacetsFromURL = () => {
    const { params, query } = instance.$router.history.current;

    const categorySlug = {
      term: params.slug_1,
      order: parseInt(query.sort) || 0,
      specs: query.specs ? decodeURIComponent(query.specs).split(',') : [],
      page: query.page || 1,
      pagesize: query.pagesize || 0,
      viewmode: query.viewmode || 'grid'
    } as any;
    return categorySlug;
  };

  // eslint-disable-next-line
  const getCatLink = (category): string => {
    return `/c/${category.slug}/`;
  };

  // eslint-disable-next-line
  const changeSorting = (sort) => {
    const { query } = instance.$router.history.current;
    instance.$router.push({ query: { ...query, sort } });
  };

  const reduceFilters = (query) => (prev, curr) => {
    const makeArray = Array.isArray(query[curr]) || queryParamsNotFilters.includes(curr);

    return {
      ...prev,
      [curr]: makeArray ? query[curr] : [query[curr]]
    };
  };

  const getFiltersDataFromUrl = (context, onlyFilters) => {
    const { query } = context.$router.history.current;

    return Object.keys(query)
      .filter((f) => (onlyFilters ? !queryParamsNotFilters.includes(f) : queryParamsNotFilters.includes(f)))
      .reduce(reduceFilters(query), {});
  };

  // eslint-disable-next-line
  const changeFilters = (filters) => {
    const array = getFiltersDataFromUrl(instance, false);
    const specs = Object.values<any[]>(filters)
      .flat()
      .join(',');

    if (Object.keys(filters).length === 0) {
      instance.$router.push({
        query: {
          ...array
        }
      });
    } else {
      instance.$router.push({
        query: {
          ...array,
          specs: specs
        }
      });
    }
  };

  // eslint-disable-next-line
  const changeItemsPerPage = (itemsPerPage) => {
    const { query } = instance.$router.history.current;
    delete query.page;
    instance.$router.push({ query: { ...query, itemsPerPage } });
  };

  // eslint-disable-next-line
  const setTermForUrl = (term: string) => {
    console.warn('[VSF] please implement useUiHelpers.changeSearchTerm.');
  };

  // eslint-disable-next-line
  const isFacetColor = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetColor.');

    return false;
  };

  // eslint-disable-next-line
  const isFacetCheckbox = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetCheckbox.');

    return false;
  };

  const getSearchTermFromUrl = () => {
    console.warn('[VSF] please implement useUiHelpers.getSearchTermFromUrl.');
  };

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    setTermForUrl,
    isFacetColor,
    isFacetCheckbox,
    getSearchTermFromUrl
  };
};

export default useUiHelpers;
