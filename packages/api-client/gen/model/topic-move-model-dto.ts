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


import { SelectListItemDto } from './select-list-item-dto';

/**
 * 
 * @export
 * @interface TopicMoveModelDto
 */
export interface TopicMoveModelDto {
    /**
     * 
     * @type {number}
     * @memberof TopicMoveModelDto
     */
    forum_selected?: number;
    /**
     * 
     * @type {string}
     * @memberof TopicMoveModelDto
     */
    topic_se_name?: string | null;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof TopicMoveModelDto
     */
    forum_list?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {number}
     * @memberof TopicMoveModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TopicMoveModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


