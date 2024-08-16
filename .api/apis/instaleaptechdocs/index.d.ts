import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Availability (Time Slots) V2
     *
     * @throws FetchError<400, types.PostJobsAvailabilityV2Response400> Malformed payload
     * @throws FetchError<403, types.PostJobsAvailabilityV2Response403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsAvailabilityV2Response422> Missing attributes or malformed payload
     */
    postJobsAvailabilityV2(body: types.PostJobsAvailabilityV2BodyParam): Promise<FetchResponse<200, types.PostJobsAvailabilityV2Response200>>;
    /**
     * Check slot
     *
     * @throws FetchError<403, types.GetJobsAvailabilitySlotidCheckResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.GetJobsAvailabilitySlotidCheckResponse404> Slot not found
     * @throws FetchError<410, types.GetJobsAvailabilitySlotidCheckResponse410> Slot expired
     */
    getJobsAvailabilitySlotidCheck(metadata: types.GetJobsAvailabilitySlotidCheckMetadataParam): Promise<FetchResponse<200, types.GetJobsAvailabilitySlotidCheckResponse200>>;
    /**
     * Create a Job
     *
     * @throws FetchError<400, types.PostJobsResponse400> Bad Request
     * @throws FetchError<403, types.PostJobsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsResponse422> Missing attributes or malformed payload
     */
    postJobs(body: types.PostJobsBodyParam): Promise<FetchResponse<200, types.PostJobsResponse200>>;
    /**
     * Get job by id
     *
     * @throws FetchError<403, types.GetJobsJobidResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.GetJobsJobidResponse404> Not found
     */
    getJobsJobid(metadata: types.GetJobsJobidMetadataParam): Promise<FetchResponse<200, types.GetJobsJobidResponse200>>;
    /**
     * Add new item
     *
     * @throws FetchError<401, types.PostJobsJobidItemsResponse401> Unauthorized
     * @throws FetchError<403, types.PostJobsJobidItemsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsJobidItemsResponse422> Missing attributes or malformed payload
     */
    postJobsJobidItems(body: types.PostJobsJobidItemsBodyParam, metadata: types.PostJobsJobidItemsMetadataParam): Promise<FetchResponse<201, types.PostJobsJobidItemsResponse201>>;
    /**
     * Update existing item
     *
     * @throws FetchError<401, types.PutJobsJobidItemsItemrefResponse401> Unauthorized
     * @throws FetchError<403, types.PutJobsJobidItemsItemrefResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.PutJobsJobidItemsItemrefResponse404> Entity not found
     * @throws FetchError<422, types.PutJobsJobidItemsItemrefResponse422> Unprocessable entity
     */
    putJobsJobidItemsItemref(body: types.PutJobsJobidItemsItemrefBodyParam, metadata: types.PutJobsJobidItemsItemrefMetadataParam): Promise<FetchResponse<200, types.PutJobsJobidItemsItemrefResponse200>>;
    /**
     * Enables your systems to change job payment information.
     *
     * @summary Payment info
     * @throws FetchError<400, types.PutJobsJobidPaymentInfoResponse400> Validation Error: The request has some errors
     * @throws FetchError<403, types.PutJobsJobidPaymentInfoResponse403> Client configuration not configured yet. Please contact support center
     */
    putJobsJobidPayment_info(body: types.PutJobsJobidPaymentInfoBodyParam, metadata: types.PutJobsJobidPaymentInfoMetadataParam): Promise<FetchResponse<200, types.PutJobsJobidPaymentInfoResponse200>>;
    /**
     * Report potential fraud
     *
     * @throws FetchError<403, types.PutJobsJobidReportFraudResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PutJobsJobidReportFraudResponse422> Missing attributes or malformed payload
     */
    putJobsJobidReport_fraud(body: types.PutJobsJobidReportFraudBodyParam, metadata: types.PutJobsJobidReportFraudMetadataParam): Promise<FetchResponse<200, types.PutJobsJobidReportFraudResponse200>>;
    /**
     * Report a custom flag on the control tower.
     *
     * @summary Report a custom flag
     * @throws FetchError<403, types.PutJobsJobidCustomFlagResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PutJobsJobidCustomFlagResponse422> Missing attributes or malformed payload
     */
    putJobsJobidCustom_flag(body: types.PutJobsJobidCustomFlagBodyParam, metadata: types.PutJobsJobidCustomFlagMetadataParam): Promise<FetchResponse<200, types.PutJobsJobidCustomFlagResponse200>>;
    /**
     * Update job comment
     *
     * @throws FetchError<401, types.PutJobsJobidJobCommentResponse401> Unauthorized
     * @throws FetchError<403, types.PutJobsJobidJobCommentResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.PutJobsJobidJobCommentResponse404> Entity not found
     * @throws FetchError<422, types.PutJobsJobidJobCommentResponse422> Unprocessable entity
     */
    putJobsJobidJob_comment(body: types.PutJobsJobidJobCommentBodyParam, metadata: types.PutJobsJobidJobCommentMetadataParam): Promise<FetchResponse<200, types.PutJobsJobidJobCommentResponse200>>;
    /**
     * Replace external data
     *
     * @throws FetchError<403, types.PutJobsJobidExternalDataResponse403> Unauthorized client or client configuration not configured yet
     */
    putJobsJobidExternal_data(body: types.PutJobsJobidExternalDataBodyParam, metadata: types.PutJobsJobidExternalDataMetadataParam): Promise<FetchResponse<200, types.PutJobsJobidExternalDataResponse200>>;
    /**
     * Create new packages to current job
     *
     * @summary Create new packages
     * @throws FetchError<403, types.PostPackagesCreateJobidResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostPackagesCreateJobidResponse422> Unprocessable entity
     */
    postPackagesCreateJobid(body: types.PostPackagesCreateJobidBodyParam, metadata: types.PostPackagesCreateJobidMetadataParam): Promise<FetchResponse<201, types.PostPackagesCreateJobidResponse201>>;
    /**
     * Cancel a job
     *
     * @throws FetchError<403, types.DeleteJobsJobidCancelResponse403> Client configuration not configured yet. Please contact support center
     */
    deleteJobsJobidCancel(metadata: types.DeleteJobsJobidCancelMetadataParam): Promise<FetchResponse<200, types.DeleteJobsJobidCancelResponse200>>;
    /**
     * Extend slot expiration time
     *
     * @throws FetchError<403, types.PutJobsSlotidExtendExpirationTimeResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PutJobsSlotidExtendExpirationTimeResponse422> Missing attributes or malformed payload
     */
    putJobsSlotidExtendExpirationTime(metadata: types.PutJobsSlotidExtendExpirationTimeMetadataParam): Promise<FetchResponse<200, types.PutJobsSlotidExtendExpirationTimeResponse200>>;
    /**
     * Adds a set of items to a job.
     *
     * @throws FetchError<400, types.PostJobsItemsResponse400> Malformed payload
     * @throws FetchError<403, types.PostJobsItemsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsItemsResponse422> Missing attributes or malformed payload
     */
    postJobsItems(body: types.PostJobsItemsBodyParam): Promise<FetchResponse<200, types.PostJobsItemsResponse200>>;
    /**
     * Removes a set of items from a job by canceling the ones that match the references sent.
     *
     * @throws FetchError<400, types.DeleteJobsItemsResponse400> Malformed payload
     * @throws FetchError<403, types.DeleteJobsItemsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.DeleteJobsItemsResponse422> Missing attributes or malformed payload
     */
    deleteJobsItems(body: types.DeleteJobsItemsBodyParam): Promise<FetchResponse<200, types.DeleteJobsItemsResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
