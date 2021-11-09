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
 * @interface CheckoutAttributeValueModelDto
 */
export interface CheckoutAttributeValueModelDto {
    /**
     * 
     * @type {string}
     * @memberof CheckoutAttributeValueModelDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutAttributeValueModelDto
     */
    color_squares_rgb?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutAttributeValueModelDto
     */
    price_adjustment?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutAttributeValueModelDto
     */
    is_pre_selected?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CheckoutAttributeValueModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CheckoutAttributeValueModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


