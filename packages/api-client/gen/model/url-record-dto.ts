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
 * Represents an URL record
 * @export
 * @interface UrlRecordDto
 */
export interface UrlRecordDto {
    /**
     * Gets or sets the entity identifier
     * @type {number}
     * @memberof UrlRecordDto
     */
    entity_id?: number;
    /**
     * Gets or sets the entity name
     * @type {string}
     * @memberof UrlRecordDto
     */
    entity_name?: string | null;
    /**
     * Gets or sets the slug
     * @type {string}
     * @memberof UrlRecordDto
     */
    slug?: string | null;
    /**
     * Gets or sets the value indicating whether the record is active
     * @type {boolean}
     * @memberof UrlRecordDto
     */
    is_active?: boolean;
    /**
     * Gets or sets the language identifier
     * @type {number}
     * @memberof UrlRecordDto
     */
    language_id?: number;
    /**
     * 
     * @type {number}
     * @memberof UrlRecordDto
     */
    id?: number;
}


