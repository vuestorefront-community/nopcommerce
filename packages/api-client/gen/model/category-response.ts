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


import { CategoryModelDto } from './category-model-dto';

/**
 * 
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    template_view_path?: string | null;
    /**
     * 
     * @type {CategoryModelDto}
     * @memberof CategoryResponse
     */
    category_model_dto?: CategoryModelDto;
}


