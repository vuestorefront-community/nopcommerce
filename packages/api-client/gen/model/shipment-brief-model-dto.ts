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
 * @interface ShipmentBriefModelDto
 */
export interface ShipmentBriefModelDto {
    /**
     * 
     * @type {string}
     * @memberof ShipmentBriefModelDto
     */
    tracking_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentBriefModelDto
     */
    shipped_date?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentBriefModelDto
     */
    delivery_date?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShipmentBriefModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShipmentBriefModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


