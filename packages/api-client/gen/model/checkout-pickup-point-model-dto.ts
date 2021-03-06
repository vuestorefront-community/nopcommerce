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
 * @interface CheckoutPickupPointModelDto
 */
export interface CheckoutPickupPointModelDto {
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    provider_system_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    county?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    state_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    country_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    zip_postal_code?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CheckoutPickupPointModelDto
     */
    latitude?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CheckoutPickupPointModelDto
     */
    longitude?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    pickup_fee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPickupPointModelDto
     */
    opening_hours?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CheckoutPickupPointModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


