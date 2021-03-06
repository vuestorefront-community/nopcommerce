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
 * @interface PrivateMessageModelDto
 */
export interface PrivateMessageModelDto {
    /**
     * 
     * @type {number}
     * @memberof PrivateMessageModelDto
     */
    from_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessageModelDto
     */
    customer_from_name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessageModelDto
     */
    allow_viewing_from_profile?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessageModelDto
     */
    to_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessageModelDto
     */
    customer_to_name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessageModelDto
     */
    allow_viewing_to_profile?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessageModelDto
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessageModelDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessageModelDto
     */
    created_on?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessageModelDto
     */
    is_read?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessageModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PrivateMessageModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


