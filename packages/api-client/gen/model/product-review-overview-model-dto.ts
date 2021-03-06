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



/**
 * 
 * @export
 * @interface ProductReviewOverviewModelDto
 */
export interface ProductReviewOverviewModelDto {
    /**
     * 
     * @type {number}
     * @memberof ProductReviewOverviewModelDto
     */
    product_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductReviewOverviewModelDto
     */
    rating_sum?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductReviewOverviewModelDto
     */
    total_reviews?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProductReviewOverviewModelDto
     */
    allow_customer_reviews?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductReviewOverviewModelDto
     */
    can_add_new_review?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductReviewOverviewModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


