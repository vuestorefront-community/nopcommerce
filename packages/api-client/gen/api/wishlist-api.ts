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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { WishlistEmailAFriendModelDto } from '../model';
// @ts-ignore
import { WishlistModelDto } from '../model';
/**
 * WishlistApi - axios parameter creator
 * @export
 */
export const WishlistApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [customerGuid] 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistAddItemsToCartFromWishlistPut: async (customerGuid?: string, requestBody?: { [key: string]: string; }, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Wishlist/AddItemsToCartFromWishlist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (customerGuid !== undefined) {
                localVarQueryParameter['customerGuid'] = customerGuid;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistEmailWishlistGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Wishlist/EmailWishlist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {WishlistEmailAFriendModelDto} [wishlistEmailAFriendModelDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistEmailWishlistSendPost: async (wishlistEmailAFriendModelDto?: WishlistEmailAFriendModelDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Wishlist/EmailWishlistSend`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(wishlistEmailAFriendModelDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistUpdateWishlistPost: async (requestBody?: { [key: string]: string; }, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Wishlist/UpdateWishlist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [customerGuid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistWishlistGet: async (customerGuid?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Wishlist/Wishlist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (customerGuid !== undefined) {
                localVarQueryParameter['customerGuid'] = customerGuid;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WishlistApi - functional programming interface
 * @export
 */
export const WishlistApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WishlistApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [customerGuid] 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendWishlistAddItemsToCartFromWishlistPut(customerGuid?: string, requestBody?: { [key: string]: string; }, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WishlistModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendWishlistAddItemsToCartFromWishlistPut(customerGuid, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendWishlistEmailWishlistGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WishlistEmailAFriendModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendWishlistEmailWishlistGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {WishlistEmailAFriendModelDto} [wishlistEmailAFriendModelDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendWishlistEmailWishlistSendPost(wishlistEmailAFriendModelDto?: WishlistEmailAFriendModelDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WishlistEmailAFriendModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendWishlistEmailWishlistSendPost(wishlistEmailAFriendModelDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendWishlistUpdateWishlistPost(requestBody?: { [key: string]: string; }, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WishlistModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendWishlistUpdateWishlistPost(requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [customerGuid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendWishlistWishlistGet(customerGuid?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WishlistModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendWishlistWishlistGet(customerGuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WishlistApi - factory interface
 * @export
 */
export const WishlistApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WishlistApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [customerGuid] 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistAddItemsToCartFromWishlistPut(customerGuid?: string, requestBody?: { [key: string]: string; }, options?: any): AxiosPromise<WishlistModelDto> {
            return localVarFp.apiFrontendWishlistAddItemsToCartFromWishlistPut(customerGuid, requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistEmailWishlistGet(options?: any): AxiosPromise<WishlistEmailAFriendModelDto> {
            return localVarFp.apiFrontendWishlistEmailWishlistGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {WishlistEmailAFriendModelDto} [wishlistEmailAFriendModelDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistEmailWishlistSendPost(wishlistEmailAFriendModelDto?: WishlistEmailAFriendModelDto, options?: any): AxiosPromise<WishlistEmailAFriendModelDto> {
            return localVarFp.apiFrontendWishlistEmailWishlistSendPost(wishlistEmailAFriendModelDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistUpdateWishlistPost(requestBody?: { [key: string]: string; }, options?: any): AxiosPromise<WishlistModelDto> {
            return localVarFp.apiFrontendWishlistUpdateWishlistPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [customerGuid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendWishlistWishlistGet(customerGuid?: string, options?: any): AxiosPromise<WishlistModelDto> {
            return localVarFp.apiFrontendWishlistWishlistGet(customerGuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WishlistApi - object-oriented interface
 * @export
 * @class WishlistApi
 * @extends {BaseAPI}
 */
export class WishlistApi extends BaseAPI {
    /**
     * 
     * @param {string} [customerGuid] 
     * @param {{ [key: string]: string; }} [requestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishlistApi
     */
    public apiFrontendWishlistAddItemsToCartFromWishlistPut(customerGuid?: string, requestBody?: { [key: string]: string; }, options?: any) {
        return WishlistApiFp(this.configuration).apiFrontendWishlistAddItemsToCartFromWishlistPut(customerGuid, requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishlistApi
     */
    public apiFrontendWishlistEmailWishlistGet(options?: any) {
        return WishlistApiFp(this.configuration).apiFrontendWishlistEmailWishlistGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {WishlistEmailAFriendModelDto} [wishlistEmailAFriendModelDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishlistApi
     */
    public apiFrontendWishlistEmailWishlistSendPost(wishlistEmailAFriendModelDto?: WishlistEmailAFriendModelDto, options?: any) {
        return WishlistApiFp(this.configuration).apiFrontendWishlistEmailWishlistSendPost(wishlistEmailAFriendModelDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {{ [key: string]: string; }} [requestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishlistApi
     */
    public apiFrontendWishlistUpdateWishlistPost(requestBody?: { [key: string]: string; }, options?: any) {
        return WishlistApiFp(this.configuration).apiFrontendWishlistUpdateWishlistPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [customerGuid] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishlistApi
     */
    public apiFrontendWishlistWishlistGet(customerGuid?: string, options?: any) {
        return WishlistApiFp(this.configuration).apiFrontendWishlistWishlistGet(customerGuid, options).then((request) => request(this.axios, this.basePath));
    }
}