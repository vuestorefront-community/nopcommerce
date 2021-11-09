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


import { SpecificationAttributeFilterModelDto } from './specification-attribute-filter-model-dto';

/**
 * Represents a specification filter model
 * @export
 * @interface SpecificationFilterModelDto
 */
export interface SpecificationFilterModelDto {
    /**
     * Gets or sets a value indicating whether filtering is enabled
     * @type {boolean}
     * @memberof SpecificationFilterModelDto
     */
    enabled?: boolean;
    /**
     * Gets or sets the filtrable specification attributes
     * @type {Array<SpecificationAttributeFilterModelDto>}
     * @memberof SpecificationFilterModelDto
     */
    attributes?: Array<SpecificationAttributeFilterModelDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SpecificationFilterModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


