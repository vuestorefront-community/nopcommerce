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
 * @interface WishlistEmailAFriendModelDto
 */
export interface WishlistEmailAFriendModelDto {
    /**
     * 
     * @type {string}
     * @memberof WishlistEmailAFriendModelDto
     */
    friend_email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WishlistEmailAFriendModelDto
     */
    your_email_address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WishlistEmailAFriendModelDto
     */
    personal_message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof WishlistEmailAFriendModelDto
     */
    successfully_sent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WishlistEmailAFriendModelDto
     */
    result?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof WishlistEmailAFriendModelDto
     */
    display_captcha?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WishlistEmailAFriendModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


