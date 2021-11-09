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


import { GiftCardType } from './gift-card-type';

/**
 * 
 * @export
 * @interface GiftCardModelDto
 */
export interface GiftCardModelDto {
    /**
     * 
     * @type {boolean}
     * @memberof GiftCardModelDto
     */
    is_gift_card?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GiftCardModelDto
     */
    recipient_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCardModelDto
     */
    recipient_email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCardModelDto
     */
    sender_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCardModelDto
     */
    sender_email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GiftCardModelDto
     */
    message?: string | null;
    /**
     * 
     * @type {GiftCardType}
     * @memberof GiftCardModelDto
     */
    gift_card_type?: GiftCardType;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof GiftCardModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


