import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { CategoryModelDto } from '@vue-storefront/nopcommerce-api/gen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(category: CategoryModelDto): AgnosticCategoryTree {
  return {
    label: category && category.name ? category.name : '',
    slug: category && category.se_name ? category.se_name : '',
    items: [],
    isCurrent: false
  };
}

export const categoryGetters: CategoryGetters<CategoryModelDto> = {
  getTree
};
