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


import { CheckoutShippingAddressModelDtoUpdateSectionJsonModelDto } from './checkout-shipping-address-model-dto-update-section-json-model-dto';

/**
 * 
 * @export
 * @interface CheckoutShippingAddressModelDtoNextStepResponse
 */
export interface CheckoutShippingAddressModelDtoNextStepResponse {
    /**
     * 
     * @type {CheckoutShippingAddressModelDtoUpdateSectionJsonModelDto}
     * @memberof CheckoutShippingAddressModelDtoNextStepResponse
     */
    update_section_model?: CheckoutShippingAddressModelDtoUpdateSectionJsonModelDto;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutShippingAddressModelDtoNextStepResponse
     */
    wrong_billing_address?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CheckoutShippingAddressModelDtoNextStepResponse
     */
    goto_section?: string | null;
}

