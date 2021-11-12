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


import { AddressModelDto } from './address-model-dto';
import { OrderDetailsGiftCardDto } from './order-details-gift-card-dto';
import { OrderDetailsTaxRateDto } from './order-details-tax-rate-dto';
import { OrderItemModelDto } from './order-item-model-dto';
import { OrderNoteDto } from './order-note-dto';
import { ShipmentBriefModelDto } from './shipment-brief-model-dto';

/**
 * 
 * @export
 * @interface OrderDetailsModelDto
 */
export interface OrderDetailsModelDto {
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    print_mode?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    pdf_invoice_disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    custom_order_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    created_on?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    order_status?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    is_re_order_allowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    is_return_request_allowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    is_shippable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    pickup_in_store?: boolean;
    /**
     * 
     * @type {AddressModelDto}
     * @memberof OrderDetailsModelDto
     */
    pickup_address?: AddressModelDto;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    shipping_status?: string | null;
    /**
     * 
     * @type {AddressModelDto}
     * @memberof OrderDetailsModelDto
     */
    shipping_address?: AddressModelDto;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    shipping_method?: string | null;
    /**
     * 
     * @type {Array<ShipmentBriefModelDto>}
     * @memberof OrderDetailsModelDto
     */
    shipments?: Array<ShipmentBriefModelDto> | null;
    /**
     * 
     * @type {AddressModelDto}
     * @memberof OrderDetailsModelDto
     */
    billing_address?: AddressModelDto;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    vat_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    payment_method?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    payment_method_status?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    can_re_post_process_payment?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderDetailsModelDto
     */
    custom_values?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    order_subtotal?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    order_sub_total_discount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    order_shipping?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    payment_method_additional_fee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    checkout_attribute_info?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    prices_include_tax?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    display_tax_shipping_info?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    tax?: string | null;
    /**
     * 
     * @type {Array<OrderDetailsTaxRateDto>}
     * @memberof OrderDetailsModelDto
     */
    tax_rates?: Array<OrderDetailsTaxRateDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    display_tax?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    display_tax_rates?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    order_total_discount?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderDetailsModelDto
     */
    redeemed_reward_points?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    redeemed_reward_points_amount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailsModelDto
     */
    order_total?: string | null;
    /**
     * 
     * @type {Array<OrderDetailsGiftCardDto>}
     * @memberof OrderDetailsModelDto
     */
    gift_cards?: Array<OrderDetailsGiftCardDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    show_sku?: boolean;
    /**
     * 
     * @type {Array<OrderItemModelDto>}
     * @memberof OrderDetailsModelDto
     */
    items?: Array<OrderItemModelDto> | null;
    /**
     * 
     * @type {Array<OrderNoteDto>}
     * @memberof OrderDetailsModelDto
     */
    order_notes?: Array<OrderNoteDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailsModelDto
     */
    show_vendor_name?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderDetailsModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderDetailsModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

