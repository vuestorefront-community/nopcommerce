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


import { RegisterModelDto } from './register-model-dto';

/**
 * 
 * @export
 * @interface RegisterModelDtoBaseModelDtoRequest
 */
export interface RegisterModelDtoBaseModelDtoRequest {
    /**
     * 
     * @type {RegisterModelDto}
     * @memberof RegisterModelDtoBaseModelDtoRequest
     */
    model?: RegisterModelDto;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RegisterModelDtoBaseModelDtoRequest
     */
    form?: { [key: string]: string; } | null;
}

