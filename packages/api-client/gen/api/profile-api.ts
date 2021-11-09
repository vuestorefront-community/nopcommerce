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
import { ProfileIndexModelDto } from '../model';
/**
 * ProfileApi - axios parameter creator
 * @export
 */
export const ProfileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [id] 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendProfileIndexGet: async (id?: number, pageNumber?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-frontend/Profile/Index`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
    }
};

/**
 * ProfileApi - functional programming interface
 * @export
 */
export const ProfileApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProfileApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [id] 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendProfileIndexGet(id?: number, pageNumber?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProfileIndexModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendProfileIndexGet(id, pageNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProfileApi - factory interface
 * @export
 */
export const ProfileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProfileApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [id] 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendProfileIndexGet(id?: number, pageNumber?: number, options?: any): AxiosPromise<ProfileIndexModelDto> {
            return localVarFp.apiFrontendProfileIndexGet(id, pageNumber, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfileApi - object-oriented interface
 * @export
 * @class ProfileApi
 * @extends {BaseAPI}
 */
export class ProfileApi extends BaseAPI {
    /**
     * 
     * @param {number} [id] 
     * @param {number} [pageNumber] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public apiFrontendProfileIndexGet(id?: number, pageNumber?: number, options?: any) {
        return ProfileApiFp(this.configuration).apiFrontendProfileIndexGet(id, pageNumber, options).then((request) => request(this.axios, this.basePath));
    }
}
