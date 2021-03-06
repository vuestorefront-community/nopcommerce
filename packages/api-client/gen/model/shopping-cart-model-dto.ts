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


import { CheckoutAttributeModelDto } from './checkout-attribute-model-dto';
import { DiscountBoxModelDto } from './discount-box-model-dto';
import { GiftCardBoxModelDto } from './gift-card-box-model-dto';
import { OrderReviewDataModelDto } from './order-review-data-model-dto';
import { ShoppingCartItemModelDto } from './shopping-cart-item-model-dto';

/**
 * 
 * @export
 * @interface ShoppingCartModelDto
 */
export interface ShoppingCartModelDto {
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    one_page_checkout_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    show_sku?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    show_product_images?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    is_editable?: boolean;
    /**
     * 
     * @type {Array<ShoppingCartItemModelDto>}
     * @memberof ShoppingCartModelDto
     */
    items?: Array<ShoppingCartItemModelDto> | null;
    /**
     * 
     * @type {Array<CheckoutAttributeModelDto>}
     * @memberof ShoppingCartModelDto
     */
    checkout_attributes?: Array<CheckoutAttributeModelDto> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShoppingCartModelDto
     */
    warnings?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ShoppingCartModelDto
     */
    min_order_subtotal_warning?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    display_tax_shipping_info?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    terms_of_service_on_shopping_cart_page?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    terms_of_service_on_order_confirm_page?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    terms_of_service_popup?: boolean;
    /**
     * 
     * @type {DiscountBoxModelDto}
     * @memberof ShoppingCartModelDto
     */
    discount_box?: DiscountBoxModelDto;
    /**
     * 
     * @type {GiftCardBoxModelDto}
     * @memberof ShoppingCartModelDto
     */
    gift_card_box?: GiftCardBoxModelDto;
    /**
     * 
     * @type {OrderReviewDataModelDto}
     * @memberof ShoppingCartModelDto
     */
    order_review_data?: OrderReviewDataModelDto;
    /**
     * 
     * @type {Array<string>}
     * @memberof ShoppingCartModelDto
     */
    button_payment_method_view_component_names?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    hide_checkout_button?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingCartModelDto
     */
    show_vendor_name?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShoppingCartModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


