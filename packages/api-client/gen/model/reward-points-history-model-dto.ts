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
 * @interface RewardPointsHistoryModelDto
 */
export interface RewardPointsHistoryModelDto {
    /**
     * 
     * @type {number}
     * @memberof RewardPointsHistoryModelDto
     */
    points?: number;
    /**
     * 
     * @type {string}
     * @memberof RewardPointsHistoryModelDto
     */
    points_balance?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RewardPointsHistoryModelDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RewardPointsHistoryModelDto
     */
    created_on?: string;
    /**
     * 
     * @type {string}
     * @memberof RewardPointsHistoryModelDto
     */
    end_date?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RewardPointsHistoryModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RewardPointsHistoryModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}


