import {
  Context,
  useReviewFactory,
  UseReviewFactoryParams
} from '@vue-storefront/core';
import type { Review } from '@vue-storefront/nopcommerce-api/lib/src/types';
import { ProductReviewsModelDto } from '@vue-storefront/nopcommerce-api/lib/src/types';
import type {
  UseReviewSearchParams as SearchParams,
  UseReviewAddParams as AddParams
} from '../../types';

const params: UseReviewFactoryParams<Review, SearchParams, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchReviews: async (context: Context, params) => {
    if (params.productId) {
      const productReviews: ProductReviewsModelDto = await context.$nopcommerce.api.productProductReviewsProductIdGet({productId: params.productId});
      return productReviews;
    }

    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addReview: async (context: Context, params) => {
    const model: ProductReviewsModelDto = {
      product_id: params.productId,
      add_product_review: {
        title: params.title,
        review_text: params.reviewText,
        rating: params.rating
      },
      add_additional_product_review_list: []
    };
    const productReviews: ProductReviewsModelDto = await context.$nopcommerce.api.productProductReviewsAddProductIdPost({ productId: params.productId, productReviewsModelDto: model});
    return productReviews;
  }
};

export const useReview = useReviewFactory<Review, SearchParams, AddParams>(params);
