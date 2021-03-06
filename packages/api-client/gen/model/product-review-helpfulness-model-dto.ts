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
 * @interface ProductReviewHelpfulnessModelDto
 */
export interface ProductReviewHelpfulnessModelDto {
    /**
     * 
     * @type {number}
     * @memberof ProductReviewHelpfulnessModelDto
     */
    product_review_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductReviewHelpfulnessModelDto
     */
    helpful_yes_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductReviewHelpfulnessModelDto
     */
    helpful_no_total?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductReviewHelpfulnessModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


