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
 * @interface CheckoutCompletedModelDto
 */
export interface CheckoutCompletedModelDto {
    /**
     * 
     * @type {number}
     * @memberof CheckoutCompletedModelDto
     */
    order_id?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckoutCompletedModelDto
     */
    custom_order_number?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutCompletedModelDto
     */
    one_page_checkout_enabled?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CheckoutCompletedModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


