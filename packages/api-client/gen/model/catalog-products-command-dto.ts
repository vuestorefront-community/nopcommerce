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
 * Represents a model to get the catalog products
 * @export
 * @interface CatalogProductsCommandDto
 */
export interface CatalogProductsCommandDto {
    /**
     * Gets or sets the price (\'min-max\' format)
     * @type {string}
     * @memberof CatalogProductsCommandDto
     */
    price?: string | null;
    /**
     * Gets or sets the specification attribute option ids
     * @type {Array<number>}
     * @memberof CatalogProductsCommandDto
     */
    specification_option_ids?: Array<number> | null;
    /**
     * Gets or sets the manufacturer ids
     * @type {Array<number>}
     * @memberof CatalogProductsCommandDto
     */
    manufacturer_ids?: Array<number> | null;
    /**
     * Gets or sets a order by
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    order_by?: number | null;
    /**
     * Gets or sets a product sorting
     * @type {string}
     * @memberof CatalogProductsCommandDto
     */
    view_mode?: string | null;
    /**
     * The current page index (starts from 0)
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    page_index?: number;
    /**
     * The current page number (starts from 1)
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    page_number?: number;
    /**
     * The number of items in each page.
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    page_size?: number;
    /**
     * The total number of items.
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    total_items?: number;
    /**
     * The total number of pages.
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    total_pages?: number;
    /**
     * The index of the first item in the page.
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    first_item?: number;
    /**
     * The index of the last item in the page.
     * @type {number}
     * @memberof CatalogProductsCommandDto
     */
    last_item?: number;
    /**
     * Whether there are pages before the current page.
     * @type {boolean}
     * @memberof CatalogProductsCommandDto
     */
    has_previous_page?: boolean;
    /**
     * Whether there are pages after the current page.
     * @type {boolean}
     * @memberof CatalogProductsCommandDto
     */
    has_next_page?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CatalogProductsCommandDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


