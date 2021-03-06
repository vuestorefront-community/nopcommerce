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
import { PrivateMessageIndexModelDto } from '../model';
// @ts-ignore
import { PrivateMessageModelDto } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { SendPrivateMessageModelDto } from '../model';
/**
 * PrivateMessagesApi - axios parameter creator
 * @export
 */
export const PrivateMessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesDeleteInboxPMPost: async (requestBody?: { [key: string]: string; }, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/PrivateMessages/DeleteInboxPM`;
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
         * @param {number} privateMessageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete: async (privateMessageId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'privateMessageId' is not null or undefined
            assertParamExists('apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete', 'privateMessageId', privateMessageId)
            const localVarPath = `/api-frontend/PrivateMessages/DeletePM/{privateMessageId}`
                .replace(`{${"privateMessageId"}}`, encodeURIComponent(String(privateMessageId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesDeleteSentPMPost: async (requestBody?: { [key: string]: string; }, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/PrivateMessages/DeleteSentPM`;
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
         * @param {string} tab 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesIndexGet: async (tab: string, pageNumber?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tab' is not null or undefined
            assertParamExists('apiFrontendPrivateMessagesIndexGet', 'tab', tab)
            const localVarPath = `/api-frontend/PrivateMessages/Index`;
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

            if (tab !== undefined) {
                localVarQueryParameter['tab'] = tab;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['pageNumber'] = pageNumber;
            }


    
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
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesMarkUnreadPost: async (requestBody?: { [key: string]: string; }, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/PrivateMessages/MarkUnread`;
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
         * @param {SendPrivateMessageModelDto} [sendPrivateMessageModelDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesSendPMPost: async (sendPrivateMessageModelDto?: SendPrivateMessageModelDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/PrivateMessages/SendPM`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(sendPrivateMessageModelDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} toCustomerId 
         * @param {number} [replyToMessageId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesSendPMToCustomerIdGet: async (toCustomerId: number, replyToMessageId?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'toCustomerId' is not null or undefined
            assertParamExists('apiFrontendPrivateMessagesSendPMToCustomerIdGet', 'toCustomerId', toCustomerId)
            const localVarPath = `/api-frontend/PrivateMessages/SendPM/{toCustomerId}`
                .replace(`{${"toCustomerId"}}`, encodeURIComponent(String(toCustomerId)));
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

            if (replyToMessageId !== undefined) {
                localVarQueryParameter['replyToMessageId'] = replyToMessageId;
            }


    
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
         * @param {number} privateMessageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesViewPMPrivateMessageIdGet: async (privateMessageId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'privateMessageId' is not null or undefined
            assertParamExists('apiFrontendPrivateMessagesViewPMPrivateMessageIdGet', 'privateMessageId', privateMessageId)
            const localVarPath = `/api-frontend/PrivateMessages/ViewPM/{privateMessageId}`
                .replace(`{${"privateMessageId"}}`, encodeURIComponent(String(privateMessageId)));
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
    }
};

/**
 * PrivateMessagesApi - functional programming interface
 * @export
 */
export const PrivateMessagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PrivateMessagesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesDeleteInboxPMPost(requestBody?: { [key: string]: string; }, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesDeleteInboxPMPost(requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} privateMessageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete(privateMessageId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete(privateMessageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesDeleteSentPMPost(requestBody?: { [key: string]: string; }, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesDeleteSentPMPost(requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} tab 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesIndexGet(tab: string, pageNumber?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PrivateMessageIndexModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesIndexGet(tab, pageNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesMarkUnreadPost(requestBody?: { [key: string]: string; }, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesMarkUnreadPost(requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {SendPrivateMessageModelDto} [sendPrivateMessageModelDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesSendPMPost(sendPrivateMessageModelDto?: SendPrivateMessageModelDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendPrivateMessageModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesSendPMPost(sendPrivateMessageModelDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} toCustomerId 
         * @param {number} [replyToMessageId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesSendPMToCustomerIdGet(toCustomerId: number, replyToMessageId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendPrivateMessageModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesSendPMToCustomerIdGet(toCustomerId, replyToMessageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} privateMessageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendPrivateMessagesViewPMPrivateMessageIdGet(privateMessageId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PrivateMessageModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendPrivateMessagesViewPMPrivateMessageIdGet(privateMessageId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PrivateMessagesApi - factory interface
 * @export
 */
export const PrivateMessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PrivateMessagesApiFp(configuration)
    return {
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesDeleteInboxPMPost(requestBody?: { [key: string]: string; }, options?: any): AxiosPromise<void> {
            return localVarFp.apiFrontendPrivateMessagesDeleteInboxPMPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} privateMessageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete(privateMessageId: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete(privateMessageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesDeleteSentPMPost(requestBody?: { [key: string]: string; }, options?: any): AxiosPromise<void> {
            return localVarFp.apiFrontendPrivateMessagesDeleteSentPMPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} tab 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesIndexGet(tab: string, pageNumber?: number, options?: any): AxiosPromise<PrivateMessageIndexModelDto> {
            return localVarFp.apiFrontendPrivateMessagesIndexGet(tab, pageNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {{ [key: string]: string; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesMarkUnreadPost(requestBody?: { [key: string]: string; }, options?: any): AxiosPromise<void> {
            return localVarFp.apiFrontendPrivateMessagesMarkUnreadPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SendPrivateMessageModelDto} [sendPrivateMessageModelDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesSendPMPost(sendPrivateMessageModelDto?: SendPrivateMessageModelDto, options?: any): AxiosPromise<SendPrivateMessageModelDto> {
            return localVarFp.apiFrontendPrivateMessagesSendPMPost(sendPrivateMessageModelDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} toCustomerId 
         * @param {number} [replyToMessageId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesSendPMToCustomerIdGet(toCustomerId: number, replyToMessageId?: number, options?: any): AxiosPromise<SendPrivateMessageModelDto> {
            return localVarFp.apiFrontendPrivateMessagesSendPMToCustomerIdGet(toCustomerId, replyToMessageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} privateMessageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendPrivateMessagesViewPMPrivateMessageIdGet(privateMessageId: number, options?: any): AxiosPromise<PrivateMessageModelDto> {
            return localVarFp.apiFrontendPrivateMessagesViewPMPrivateMessageIdGet(privateMessageId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PrivateMessagesApi - object-oriented interface
 * @export
 * @class PrivateMessagesApi
 * @extends {BaseAPI}
 */
export class PrivateMessagesApi extends BaseAPI {
    /**
     * 
     * @param {{ [key: string]: string; }} [requestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesDeleteInboxPMPost(requestBody?: { [key: string]: string; }, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesDeleteInboxPMPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} privateMessageId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete(privateMessageId: number, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesDeletePMPrivateMessageIdDelete(privateMessageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {{ [key: string]: string; }} [requestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesDeleteSentPMPost(requestBody?: { [key: string]: string; }, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesDeleteSentPMPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} tab 
     * @param {number} [pageNumber] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesIndexGet(tab: string, pageNumber?: number, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesIndexGet(tab, pageNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {{ [key: string]: string; }} [requestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesMarkUnreadPost(requestBody?: { [key: string]: string; }, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesMarkUnreadPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SendPrivateMessageModelDto} [sendPrivateMessageModelDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesSendPMPost(sendPrivateMessageModelDto?: SendPrivateMessageModelDto, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesSendPMPost(sendPrivateMessageModelDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} toCustomerId 
     * @param {number} [replyToMessageId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesSendPMToCustomerIdGet(toCustomerId: number, replyToMessageId?: number, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesSendPMToCustomerIdGet(toCustomerId, replyToMessageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} privateMessageId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivateMessagesApi
     */
    public apiFrontendPrivateMessagesViewPMPrivateMessageIdGet(privateMessageId: number, options?: any) {
        return PrivateMessagesApiFp(this.configuration).apiFrontendPrivateMessagesViewPMPrivateMessageIdGet(privateMessageId, options).then((request) => request(this.axios, this.basePath));
    }
}
