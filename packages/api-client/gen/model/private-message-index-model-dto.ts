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
 * @interface PrivateMessageIndexModelDto
 */
export interface PrivateMessageIndexModelDto {
    /**
     * 
     * @type {number}
     * @memberof PrivateMessageIndexModelDto
     */
    inbox_page?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessageIndexModelDto
     */
    sent_items_page?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessageIndexModelDto
     */
    sent_items_tab_selected?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PrivateMessageIndexModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


