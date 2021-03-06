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
 * @interface ProductSpecificationAttributeValueModelDto
 */
export interface ProductSpecificationAttributeValueModelDto {
    /**
     * Gets or sets the attribute type id
     * @type {number}
     * @memberof ProductSpecificationAttributeValueModelDto
     */
    attribute_type_id?: number;
    /**
     * Gets or sets the value raw. This value is already HTML encoded
     * @type {string}
     * @memberof ProductSpecificationAttributeValueModelDto
     */
    value_raw?: string | null;
    /**
     * Gets or sets the option color (if specified). Used to display color squares
     * @type {string}
     * @memberof ProductSpecificationAttributeValueModelDto
     */
    color_squares_rgb?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductSpecificationAttributeValueModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


