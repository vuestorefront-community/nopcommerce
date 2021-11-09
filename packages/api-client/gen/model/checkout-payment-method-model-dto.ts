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


import { PaymentMethodModelDto } from './payment-method-model-dto';

/**
 * 
 * @export
 * @interface CheckoutPaymentMethodModelDto
 */
export interface CheckoutPaymentMethodModelDto {
    /**
     * 
     * @type {Array<PaymentMethodModelDto>}
     * @memberof CheckoutPaymentMethodModelDto
     */
    payment_methods?: Array<PaymentMethodModelDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutPaymentMethodModelDto
     */
    display_reward_points?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CheckoutPaymentMethodModelDto
     */
    reward_points_balance?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckoutPaymentMethodModelDto
     */
    reward_points_amount?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutPaymentMethodModelDto
     */
    reward_points_enough_to_pay_for_order?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutPaymentMethodModelDto
     */
    use_reward_points?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CheckoutPaymentMethodModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


