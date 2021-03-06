/* tslint:disable */
/* eslint-disable */
/**
 * nopCommerce Web API Frontend
 * Official nopCommerce Web API for public store
 *
 * The version of the OpenAPI document: v1.05
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AddProductReviewModelDto } from './add-product-review-model-dto';
import { AddProductReviewReviewTypeMappingModelDto } from './add-product-review-review-type-mapping-model-dto';
import { ProductReviewModelDto } from './product-review-model-dto';
import { ReviewTypeModelDto } from './review-type-model-dto';

/**
 * 
 * @export
 * @interface ProductReviewsModelDto
 */
export interface ProductReviewsModelDto {
    /**
     * 
     * @type {number}
     * @memberof ProductReviewsModelDto
     */
    product_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductReviewsModelDto
     */
    product_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductReviewsModelDto
     */
    product_se_name?: string | null;
    /**
     * 
     * @type {Array<ProductReviewModelDto>}
     * @memberof ProductReviewsModelDto
     */
    items?: Array<ProductReviewModelDto> | null;
    /**
     * 
     * @type {AddProductReviewModelDto}
     * @memberof ProductReviewsModelDto
     */
    add_product_review?: AddProductReviewModelDto;
    /**
     * 
     * @type {Array<ReviewTypeModelDto>}
     * @memberof ProductReviewsModelDto
     */
    review_type_list?: Array<ReviewTypeModelDto> | null;
    /**
     * 
     * @type {Array<AddProductReviewReviewTypeMappingModelDto>}
     * @memberof ProductReviewsModelDto
     */
    add_additional_product_review_list?: Array<AddProductReviewReviewTypeMappingModelDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductReviewsModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


