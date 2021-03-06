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
 * @interface ProductOverviewProductPriceModelDto
 */
export interface ProductOverviewProductPriceModelDto {
    /**
     * 
     * @type {string}
     * @memberof ProductOverviewProductPriceModelDto
     */
    old_price?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductOverviewProductPriceModelDto
     */
    price?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductOverviewProductPriceModelDto
     */
    price_value?: number;
    /**
     * PAngV base price (used in Germany)
     * @type {string}
     * @memberof ProductOverviewProductPriceModelDto
     */
    base_price_p_ang_v?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    disable_buy_button?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    disable_wishlist_button?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    disable_add_to_compare_list_button?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    available_for_pre_order?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductOverviewProductPriceModelDto
     */
    pre_order_availability_start_date_time_utc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    is_rental?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    force_redirection_after_adding_to_cart?: boolean;
    /**
     * A value indicating whether we should display tax/shipping info (used in Germany)
     * @type {boolean}
     * @memberof ProductOverviewProductPriceModelDto
     */
    display_tax_shipping_info?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProductOverviewProductPriceModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


