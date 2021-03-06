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


import { CatalogProductsModelDto } from './catalog-products-model-dto';

/**
 * 
 * @export
 * @interface ProductsByTagModelDto
 */
export interface ProductsByTagModelDto {
    /**
     * 
     * @type {string}
     * @memberof ProductsByTagModelDto
     */
    tag_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductsByTagModelDto
     */
    tag_se_name?: string | null;
    /**
     * 
     * @type {CatalogProductsModelDto}
     * @memberof ProductsByTagModelDto
     */
    catalog_products_model?: CatalogProductsModelDto;
    /**
     * 
     * @type {number}
     * @memberof ProductsByTagModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductsByTagModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


