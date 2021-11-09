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
import { SelectListItemDto } from './select-list-item-dto';

/**
 * 
 * @export
 * @interface SearchModelDto
 */
export interface SearchModelDto {
    /**
     * Query string
     * @type {string}
     * @memberof SearchModelDto
     */
    q?: string | null;
    /**
     * Category ID
     * @type {number}
     * @memberof SearchModelDto
     */
    cid?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchModelDto
     */
    isc?: boolean;
    /**
     * Manufacturer ID
     * @type {number}
     * @memberof SearchModelDto
     */
    mid?: number;
    /**
     * Vendor ID
     * @type {number}
     * @memberof SearchModelDto
     */
    vid?: number;
    /**
     * A value indicating whether to search in descriptions
     * @type {boolean}
     * @memberof SearchModelDto
     */
    sid?: boolean;
    /**
     * A value indicating whether \"advanced search\" is enabled
     * @type {boolean}
     * @memberof SearchModelDto
     */
    advs?: boolean;
    /**
     * A value indicating whether \"allow search by vendor\" is enabled
     * @type {boolean}
     * @memberof SearchModelDto
     */
    asv?: boolean;
    /**
     * 
     * @type {CatalogProductsModelDto}
     * @memberof SearchModelDto
     */
    catalog_products_model?: CatalogProductsModelDto;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof SearchModelDto
     */
    available_categories?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof SearchModelDto
     */
    available_manufacturers?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof SearchModelDto
     */
    available_vendors?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SearchModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


