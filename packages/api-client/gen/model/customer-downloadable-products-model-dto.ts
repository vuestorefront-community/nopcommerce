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


import { DownloadableProductsModelDto } from './downloadable-products-model-dto';

/**
 * 
 * @export
 * @interface CustomerDownloadableProductsModelDto
 */
export interface CustomerDownloadableProductsModelDto {
    /**
     * 
     * @type {Array<DownloadableProductsModelDto>}
     * @memberof CustomerDownloadableProductsModelDto
     */
    items?: Array<DownloadableProductsModelDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CustomerDownloadableProductsModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


