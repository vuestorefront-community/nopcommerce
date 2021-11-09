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
 * @interface BackInStockSubscribeModelDto
 */
export interface BackInStockSubscribeModelDto {
    /**
     * 
     * @type {number}
     * @memberof BackInStockSubscribeModelDto
     */
    product_id?: number;
    /**
     * 
     * @type {string}
     * @memberof BackInStockSubscribeModelDto
     */
    product_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackInStockSubscribeModelDto
     */
    product_se_name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BackInStockSubscribeModelDto
     */
    is_current_customer_registered?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BackInStockSubscribeModelDto
     */
    subscription_allowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BackInStockSubscribeModelDto
     */
    already_subscribed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BackInStockSubscribeModelDto
     */
    maximum_back_in_stock_subscriptions?: number;
    /**
     * 
     * @type {number}
     * @memberof BackInStockSubscribeModelDto
     */
    current_number_of_back_in_stock_subscriptions?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BackInStockSubscribeModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


