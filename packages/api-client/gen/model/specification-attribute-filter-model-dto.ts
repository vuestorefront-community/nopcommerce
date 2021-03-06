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


import { SpecificationAttributeValueFilterModelDto } from './specification-attribute-value-filter-model-dto';

/**
 * Represents a specification attribute filter model
 * @export
 * @interface SpecificationAttributeFilterModelDto
 */
export interface SpecificationAttributeFilterModelDto {
    /**
     * Gets or sets the specification attribute name
     * @type {string}
     * @memberof SpecificationAttributeFilterModelDto
     */
    name?: string | null;
    /**
     * Gets or sets the values
     * @type {Array<SpecificationAttributeValueFilterModelDto>}
     * @memberof SpecificationAttributeFilterModelDto
     */
    values?: Array<SpecificationAttributeValueFilterModelDto> | null;
    /**
     * 
     * @type {number}
     * @memberof SpecificationAttributeFilterModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SpecificationAttributeFilterModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


