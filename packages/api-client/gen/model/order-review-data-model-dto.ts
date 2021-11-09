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


import { AddressModelDto } from './address-model-dto';

/**
 * 
 * @export
 * @interface OrderReviewDataModelDto
 */
export interface OrderReviewDataModelDto {
    /**
     * 
     * @type {boolean}
     * @memberof OrderReviewDataModelDto
     */
    display?: boolean;
    /**
     * 
     * @type {AddressModelDto}
     * @memberof OrderReviewDataModelDto
     */
    billing_address?: AddressModelDto;
    /**
     * 
     * @type {boolean}
     * @memberof OrderReviewDataModelDto
     */
    is_shippable?: boolean;
    /**
     * 
     * @type {AddressModelDto}
     * @memberof OrderReviewDataModelDto
     */
    shipping_address?: AddressModelDto;
    /**
     * 
     * @type {boolean}
     * @memberof OrderReviewDataModelDto
     */
    selected_pickup_in_store?: boolean;
    /**
     * 
     * @type {AddressModelDto}
     * @memberof OrderReviewDataModelDto
     */
    pickup_address?: AddressModelDto;
    /**
     * 
     * @type {string}
     * @memberof OrderReviewDataModelDto
     */
    shipping_method?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderReviewDataModelDto
     */
    payment_method?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderReviewDataModelDto
     */
    custom_values?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderReviewDataModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


