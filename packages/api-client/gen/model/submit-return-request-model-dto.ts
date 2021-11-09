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


import { ReturnRequestActionModelDto } from './return-request-action-model-dto';
import { ReturnRequestOrderItemModelDto } from './return-request-order-item-model-dto';
import { ReturnRequestReasonModelDto } from './return-request-reason-model-dto';

/**
 * 
 * @export
 * @interface SubmitReturnRequestModelDto
 */
export interface SubmitReturnRequestModelDto {
    /**
     * 
     * @type {number}
     * @memberof SubmitReturnRequestModelDto
     */
    order_id?: number;
    /**
     * 
     * @type {string}
     * @memberof SubmitReturnRequestModelDto
     */
    custom_order_number?: string | null;
    /**
     * 
     * @type {Array<ReturnRequestOrderItemModelDto>}
     * @memberof SubmitReturnRequestModelDto
     */
    items?: Array<ReturnRequestOrderItemModelDto> | null;
    /**
     * 
     * @type {number}
     * @memberof SubmitReturnRequestModelDto
     */
    return_request_reason_id?: number;
    /**
     * 
     * @type {Array<ReturnRequestReasonModelDto>}
     * @memberof SubmitReturnRequestModelDto
     */
    available_return_reasons?: Array<ReturnRequestReasonModelDto> | null;
    /**
     * 
     * @type {number}
     * @memberof SubmitReturnRequestModelDto
     */
    return_request_action_id?: number;
    /**
     * 
     * @type {Array<ReturnRequestActionModelDto>}
     * @memberof SubmitReturnRequestModelDto
     */
    available_return_actions?: Array<ReturnRequestActionModelDto> | null;
    /**
     * 
     * @type {string}
     * @memberof SubmitReturnRequestModelDto
     */
    comments?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubmitReturnRequestModelDto
     */
    allow_files?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubmitReturnRequestModelDto
     */
    uploaded_file_guid?: string;
    /**
     * 
     * @type {string}
     * @memberof SubmitReturnRequestModelDto
     */
    result?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SubmitReturnRequestModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


