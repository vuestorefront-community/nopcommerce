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


import { OrderTotalsModelDto } from './order-totals-model-dto';

/**
 * 
 * @export
 * @interface CheckoutAttributeChangeResponse
 */
export interface CheckoutAttributeChangeResponse {
    /**
     * 
     * @type {OrderTotalsModelDto}
     * @memberof CheckoutAttributeChangeResponse
     */
    order_totals_model?: OrderTotalsModelDto;
    /**
     * 
     * @type {string}
     * @memberof CheckoutAttributeChangeResponse
     */
    formatted_attributes?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CheckoutAttributeChangeResponse
     */
    enabled_attribute_ids?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CheckoutAttributeChangeResponse
     */
    disabled_attribute_ids?: Array<number> | null;
}


