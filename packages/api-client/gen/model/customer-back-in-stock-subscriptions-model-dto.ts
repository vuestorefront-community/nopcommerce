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


import { BackInStockSubscriptionModelDto } from './back-in-stock-subscription-model-dto';
import { PagerModelDto } from './pager-model-dto';

/**
 * 
 * @export
 * @interface CustomerBackInStockSubscriptionsModelDto
 */
export interface CustomerBackInStockSubscriptionsModelDto {
    /**
     * 
     * @type {Array<BackInStockSubscriptionModelDto>}
     * @memberof CustomerBackInStockSubscriptionsModelDto
     */
    subscriptions?: Array<BackInStockSubscriptionModelDto> | null;
    /**
     * 
     * @type {PagerModelDto}
     * @memberof CustomerBackInStockSubscriptionsModelDto
     */
    pager_model?: PagerModelDto;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CustomerBackInStockSubscriptionsModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


