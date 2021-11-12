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
 * @interface ForumSubscriptionModelDto
 */
export interface ForumSubscriptionModelDto {
    /**
     * 
     * @type {number}
     * @memberof ForumSubscriptionModelDto
     */
    forum_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ForumSubscriptionModelDto
     */
    forum_topic_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ForumSubscriptionModelDto
     */
    topic_subscription?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ForumSubscriptionModelDto
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForumSubscriptionModelDto
     */
    slug?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ForumSubscriptionModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ForumSubscriptionModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

