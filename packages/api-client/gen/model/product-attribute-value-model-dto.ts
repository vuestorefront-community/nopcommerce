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


import { PictureModelDto } from './picture-model-dto';

/**
 * 
 * @export
 * @interface ProductAttributeValueModelDto
 */
export interface ProductAttributeValueModelDto {
    /**
     * 
     * @type {string}
     * @memberof ProductAttributeValueModelDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductAttributeValueModelDto
     */
    color_squares_rgb?: string | null;
    /**
     * 
     * @type {PictureModelDto}
     * @memberof ProductAttributeValueModelDto
     */
    image_squares_picture_model?: PictureModelDto;
    /**
     * 
     * @type {string}
     * @memberof ProductAttributeValueModelDto
     */
    price_adjustment?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductAttributeValueModelDto
     */
    price_adjustment_use_percentage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductAttributeValueModelDto
     */
    price_adjustment_value?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProductAttributeValueModelDto
     */
    is_pre_selected?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductAttributeValueModelDto
     */
    picture_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProductAttributeValueModelDto
     */
    customer_enters_qty?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProductAttributeValueModelDto
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductAttributeValueModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductAttributeValueModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


