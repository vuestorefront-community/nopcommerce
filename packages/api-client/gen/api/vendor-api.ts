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
import { ApplyVendorModelDto } from '../model';
// @ts-ignore
import { ApplyVendorRequest } from '../model';
// @ts-ignore
import { InfoRequest } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { VendorInfoModelDto } from '../model';
/**
 * VendorApi - axios parameter creator
 * @export
 */
export const VendorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorApplyVendorGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Vendor/ApplyVendor`;
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
         * @param {string} contentType 
         * @param {ApplyVendorRequest} [applyVendorRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorApplyVendorSubmitPost: async (contentType: string, applyVendorRequest?: ApplyVendorRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('apiFrontendVendorApplyVendorSubmitPost', 'contentType', contentType)
            const localVarPath = `/api-frontend/Vendor/ApplyVendorSubmit`;
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

            if (contentType !== undefined) {
                localVarQueryParameter['contentType'] = contentType;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(applyVendorRequest, localVarRequestOptions, configuration)

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
        apiFrontendVendorInfoGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Vendor/Info`;
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
         * @param {string} contentType 
         * @param {InfoRequest} [infoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorInfoPost: async (contentType: string, infoRequest?: InfoRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            assertParamExists('apiFrontendVendorInfoPost', 'contentType', contentType)
            const localVarPath = `/api-frontend/Vendor/Info`;
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

            if (contentType !== undefined) {
                localVarQueryParameter['contentType'] = contentType;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(infoRequest, localVarRequestOptions, configuration)

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
        apiFrontendVendorRemovePictureDelete: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Vendor/RemovePicture`;
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
    }
};

/**
 * VendorApi - functional programming interface
 * @export
 */
export const VendorApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendVendorApplyVendorGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApplyVendorModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendVendorApplyVendorGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} contentType 
         * @param {ApplyVendorRequest} [applyVendorRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendVendorApplyVendorSubmitPost(contentType: string, applyVendorRequest?: ApplyVendorRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApplyVendorModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendVendorApplyVendorSubmitPost(contentType, applyVendorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendVendorInfoGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VendorInfoModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendVendorInfoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} contentType 
         * @param {InfoRequest} [infoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendVendorInfoPost(contentType: string, infoRequest?: InfoRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VendorInfoModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendVendorInfoPost(contentType, infoRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendVendorRemovePictureDelete(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendVendorRemovePictureDelete(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorApi - factory interface
 * @export
 */
export const VendorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorApplyVendorGet(options?: any): AxiosPromise<ApplyVendorModelDto> {
            return localVarFp.apiFrontendVendorApplyVendorGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} contentType 
         * @param {ApplyVendorRequest} [applyVendorRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorApplyVendorSubmitPost(contentType: string, applyVendorRequest?: ApplyVendorRequest, options?: any): AxiosPromise<ApplyVendorModelDto> {
            return localVarFp.apiFrontendVendorApplyVendorSubmitPost(contentType, applyVendorRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorInfoGet(options?: any): AxiosPromise<VendorInfoModelDto> {
            return localVarFp.apiFrontendVendorInfoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} contentType 
         * @param {InfoRequest} [infoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorInfoPost(contentType: string, infoRequest?: InfoRequest, options?: any): AxiosPromise<VendorInfoModelDto> {
            return localVarFp.apiFrontendVendorInfoPost(contentType, infoRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendVendorRemovePictureDelete(options?: any): AxiosPromise<void> {
            return localVarFp.apiFrontendVendorRemovePictureDelete(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VendorApi - object-oriented interface
 * @export
 * @class VendorApi
 * @extends {BaseAPI}
 */
export class VendorApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApi
     */
    public apiFrontendVendorApplyVendorGet(options?: any) {
        return VendorApiFp(this.configuration).apiFrontendVendorApplyVendorGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} contentType 
     * @param {ApplyVendorRequest} [applyVendorRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApi
     */
    public apiFrontendVendorApplyVendorSubmitPost(contentType: string, applyVendorRequest?: ApplyVendorRequest, options?: any) {
        return VendorApiFp(this.configuration).apiFrontendVendorApplyVendorSubmitPost(contentType, applyVendorRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApi
     */
    public apiFrontendVendorInfoGet(options?: any) {
        return VendorApiFp(this.configuration).apiFrontendVendorInfoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} contentType 
     * @param {InfoRequest} [infoRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApi
     */
    public apiFrontendVendorInfoPost(contentType: string, infoRequest?: InfoRequest, options?: any) {
        return VendorApiFp(this.configuration).apiFrontendVendorInfoPost(contentType, infoRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApi
     */
    public apiFrontendVendorRemovePictureDelete(options?: any) {
        return VendorApiFp(this.configuration).apiFrontendVendorRemovePictureDelete(options).then((request) => request(this.axios, this.basePath));
    }
}
