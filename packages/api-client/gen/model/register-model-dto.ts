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


import { CustomerAttributeModelDto } from './customer-attribute-model-dto';
import { GdprConsentModelDto } from './gdpr-consent-model-dto';
import { SelectListItemDto } from './select-list-item-dto';

/**
 * 
 * @export
 * @interface RegisterModelDto
 */
export interface RegisterModelDto {
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    entering_email_twice?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    confirm_email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    usernames_enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    username?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    check_username_availability_enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    confirm_password?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    gender_enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    gender?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    first_name_enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    first_name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    first_name_required?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    last_name_enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    last_name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    last_name_required?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    date_of_birth_enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RegisterModelDto
     */
    date_of_birth_day?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RegisterModelDto
     */
    date_of_birth_month?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RegisterModelDto
     */
    date_of_birth_year?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    date_of_birth_required?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    company_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    company_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    company?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    street_address_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    street_address_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    street_address?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    street_address2_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    street_address2_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    street_address2?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    zip_postal_code_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    zip_postal_code_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    zip_postal_code?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    city_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    city_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    city?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    county_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    county_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    county?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    country_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    country_required?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RegisterModelDto
     */
    country_id?: number;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof RegisterModelDto
     */
    available_countries?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    state_province_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    state_province_required?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RegisterModelDto
     */
    state_province_id?: number;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof RegisterModelDto
     */
    available_states?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    phone_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    phone_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    phone?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    fax_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    fax_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    fax?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    newsletter_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    newsletter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    accept_privacy_policy_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    accept_privacy_policy_popup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    time_zone_id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    allow_customers_to_set_time_zone?: boolean;
    /**
     * 
     * @type {Array<SelectListItemDto>}
     * @memberof RegisterModelDto
     */
    available_time_zones?: Array<SelectListItemDto> | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterModelDto
     */
    vat_number?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    display_vat_number?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    honeypot_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterModelDto
     */
    display_captcha?: boolean;
    /**
     * 
     * @type {Array<CustomerAttributeModelDto>}
     * @memberof RegisterModelDto
     */
    customer_attributes?: Array<CustomerAttributeModelDto> | null;
    /**
     * 
     * @type {Array<GdprConsentModelDto>}
     * @memberof RegisterModelDto
     */
    gdpr_consents?: Array<GdprConsentModelDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RegisterModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


