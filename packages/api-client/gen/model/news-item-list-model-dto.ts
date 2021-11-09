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


import { BasePageableModelDto } from './base-pageable-model-dto';
import { NewsItemModelDto } from './news-item-model-dto';

/**
 * 
 * @export
 * @interface NewsItemListModelDto
 */
export interface NewsItemListModelDto {
    /**
     * 
     * @type {number}
     * @memberof NewsItemListModelDto
     */
    working_language_id?: number;
    /**
     * 
     * @type {BasePageableModelDto}
     * @memberof NewsItemListModelDto
     */
    paging_filtering_context?: BasePageableModelDto;
    /**
     * 
     * @type {Array<NewsItemModelDto>}
     * @memberof NewsItemListModelDto
     */
    news_items?: Array<NewsItemModelDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NewsItemListModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


