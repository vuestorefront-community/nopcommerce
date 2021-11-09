import { ReviewGetters, AgnosticRateCount } from '@vue-storefront/core';
import { ProductReviewModelDto, ProductReviewsModelDto } from '@vue-storefront/nopcommerce-api/gen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(review: ProductReviewsModelDto): ProductReviewModelDto[] {
  return review && review.items ? review.items : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewId(item: ProductReviewModelDto): string {
  return item && item.id ? item.id.toString() : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewAuthor(item: ProductReviewModelDto): string {
  return item && item.customer_name ? item.customer_name : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewMessage(item: ProductReviewModelDto): string {
  return item && item.review_text ? item.review_text : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewRating(item: ProductReviewModelDto): number {
  return item && item.rating ? item.rating : 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewDate(item: ProductReviewModelDto): string {
  return item && item.written_on_str ? item.written_on_str : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(review: ProductReviewModelDto): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(review: ProductReviewModelDto): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRatesCount(review: ProductReviewModelDto): AgnosticRateCount[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewsPage(review: ProductReviewModelDto): number {
  return 0;
}

export const reviewGetters: ReviewGetters<ProductReviewsModelDto, ProductReviewModelDto> = {
  getItems,
  getReviewId,
  getReviewAuthor,
  getReviewMessage,
  getReviewRating,
  getReviewDate,
  getTotalReviews,
  getAverageRating,
  getRatesCount,
  getReviewsPage
};
