import { useRoute, useRouter } from '@nuxtjs/composition-api';

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
  getSlug: () => string;
}

export const useUiHelpers: () => UseUiHelpers = () => {
  const route = useRoute();
  const router = useRouter();
  const { query, params } = route.value;

  const getFacetsFromURL = () => {
    const order = Array.isArray(query.sort) ? query.sort[0] : query.sort;
    const specs = Array.isArray(query.specs) ? query.specs[0] : query.specs;
    const categorySlug = {
      term: params.slug_1,
      order: parseInt(order) || 0,
      specs: query.specs ? decodeURIComponent(specs).split(',') : [],
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
    router.push({ query: { ...query, sort } });
  };

  const reduceFilters = (query) => (prev, curr) => {
    const makeArray = Array.isArray(query[curr]) || queryParamsNotFilters.includes(curr);

    return {
      ...prev,
      [curr]: makeArray ? query[curr] : [query[curr]]
    };
  };

  const getFiltersDataFromUrl = (onlyFilters) => {
    return Object.keys(query)
      .filter((f) => (onlyFilters ? !queryParamsNotFilters.includes(f) : queryParamsNotFilters.includes(f)))
      .reduce(reduceFilters(query), {});
  };

  // eslint-disable-next-line
  const changeFilters = (filters) => {
    const array = getFiltersDataFromUrl(false);
    const specs = Object.values<any[]>(filters)
      .flat()
      .join(',');

    if (Object.keys(filters).length === 0) {
      router.push({
        query: {
          ...array
        }
      });
    } else {
      router.push({
        query: {
          ...array,
          specs: specs
        }
      });
    }
  };

  // eslint-disable-next-line
  const changeItemsPerPage = (itemsPerPage) => {
    delete query.page;
    router.push({ query: { ...query, itemsPerPage } });
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

  const getSlug = () => {
    return router.currentRoute.path.replace('/', '');
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
    getSearchTermFromUrl,
    getSlug
  };
};

export default useUiHelpers;
