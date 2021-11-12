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
 * @interface AddNewsCommentModelDto
 */
export interface AddNewsCommentModelDto {
    /**
     * 
     * @type {string}
     * @memberof AddNewsCommentModelDto
     */
    comment_title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddNewsCommentModelDto
     */
    comment_text?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AddNewsCommentModelDto
     */
    display_captcha?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AddNewsCommentModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

