import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'instaleaptechdocs/2.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Availability (Time Slots) V2
     *
     * @throws FetchError<400, types.PostJobsAvailabilityV2Response400> Malformed payload
     * @throws FetchError<403, types.PostJobsAvailabilityV2Response403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsAvailabilityV2Response422> Missing attributes or malformed payload
     */
    postJobsAvailabilityV2(body) {
        return this.core.fetch('/jobs/availability/v2', 'post', body);
    }
    /**
     * Check slot
     *
     * @throws FetchError<403, types.GetJobsAvailabilitySlotidCheckResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.GetJobsAvailabilitySlotidCheckResponse404> Slot not found
     * @throws FetchError<410, types.GetJobsAvailabilitySlotidCheckResponse410> Slot expired
     */
    getJobsAvailabilitySlotidCheck(metadata) {
        return this.core.fetch('/jobs/availability/{slotId}/check', 'get', metadata);
    }
    /**
     * Create a Job
     *
     * @throws FetchError<400, types.PostJobsResponse400> Bad Request
     * @throws FetchError<403, types.PostJobsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsResponse422> Missing attributes or malformed payload
     */
    postJobs(body) {
        return this.core.fetch('/jobs', 'post', body);
    }
    /**
     * Get job by id
     *
     * @throws FetchError<403, types.GetJobsJobidResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.GetJobsJobidResponse404> Not found
     */
    getJobsJobid(metadata) {
        return this.core.fetch('/jobs/{jobId}', 'get', metadata);
    }
    /**
     * Add new item
     *
     * @throws FetchError<401, types.PostJobsJobidItemsResponse401> Unauthorized
     * @throws FetchError<403, types.PostJobsJobidItemsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsJobidItemsResponse422> Missing attributes or malformed payload
     */
    postJobsJobidItems(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/items', 'post', body, metadata);
    }
    /**
     * Update existing item
     *
     * @throws FetchError<401, types.PutJobsJobidItemsItemrefResponse401> Unauthorized
     * @throws FetchError<403, types.PutJobsJobidItemsItemrefResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.PutJobsJobidItemsItemrefResponse404> Entity not found
     * @throws FetchError<422, types.PutJobsJobidItemsItemrefResponse422> Unprocessable entity
     */
    putJobsJobidItemsItemref(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/items/{itemRef}', 'put', body, metadata);
    }
    /**
     * Enables your systems to change job payment information.
     *
     * @summary Payment info
     * @throws FetchError<400, types.PutJobsJobidPaymentInfoResponse400> Validation Error: The request has some errors
     * @throws FetchError<403, types.PutJobsJobidPaymentInfoResponse403> Client configuration not configured yet. Please contact support center
     */
    putJobsJobidPayment_info(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/payment_info', 'put', body, metadata);
    }
    /**
     * Report potential fraud
     *
     * @throws FetchError<403, types.PutJobsJobidReportFraudResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PutJobsJobidReportFraudResponse422> Missing attributes or malformed payload
     */
    putJobsJobidReport_fraud(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/report_fraud', 'put', body, metadata);
    }
    /**
     * Report a custom flag on the control tower.
     *
     * @summary Report a custom flag
     * @throws FetchError<403, types.PutJobsJobidCustomFlagResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PutJobsJobidCustomFlagResponse422> Missing attributes or malformed payload
     */
    putJobsJobidCustom_flag(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/custom_flag', 'put', body, metadata);
    }
    /**
     * Update job comment
     *
     * @throws FetchError<401, types.PutJobsJobidJobCommentResponse401> Unauthorized
     * @throws FetchError<403, types.PutJobsJobidJobCommentResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<404, types.PutJobsJobidJobCommentResponse404> Entity not found
     * @throws FetchError<422, types.PutJobsJobidJobCommentResponse422> Unprocessable entity
     */
    putJobsJobidJob_comment(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/job_comment', 'put', body, metadata);
    }
    /**
     * Replace external data
     *
     * @throws FetchError<403, types.PutJobsJobidExternalDataResponse403> Unauthorized client or client configuration not configured yet
     */
    putJobsJobidExternal_data(body, metadata) {
        return this.core.fetch('/jobs/{jobId}/external_data', 'put', body, metadata);
    }
    /**
     * Create new packages to current job
     *
     * @summary Create new packages
     * @throws FetchError<403, types.PostPackagesCreateJobidResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostPackagesCreateJobidResponse422> Unprocessable entity
     */
    postPackagesCreateJobid(body, metadata) {
        return this.core.fetch('/packages/create/{jobId}', 'post', body, metadata);
    }
    /**
     * Cancel a job
     *
     * @throws FetchError<403, types.DeleteJobsJobidCancelResponse403> Client configuration not configured yet. Please contact support center
     */
    deleteJobsJobidCancel(metadata) {
        return this.core.fetch('/jobs/{jobId}/cancel', 'delete', metadata);
    }
    /**
     * Extend slot expiration time
     *
     * @throws FetchError<403, types.PutJobsSlotidExtendExpirationTimeResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PutJobsSlotidExtendExpirationTimeResponse422> Missing attributes or malformed payload
     */
    putJobsSlotidExtendExpirationTime(metadata) {
        return this.core.fetch('/jobs/{slotId}/extend-expiration-time', 'put', metadata);
    }
    /**
     * Adds a set of items to a job.
     *
     * @throws FetchError<400, types.PostJobsItemsResponse400> Malformed payload
     * @throws FetchError<403, types.PostJobsItemsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.PostJobsItemsResponse422> Missing attributes or malformed payload
     */
    postJobsItems(body) {
        return this.core.fetch('/jobs/items', 'post', body);
    }
    /**
     * Removes a set of items from a job by canceling the ones that match the references sent.
     *
     * @throws FetchError<400, types.DeleteJobsItemsResponse400> Malformed payload
     * @throws FetchError<403, types.DeleteJobsItemsResponse403> Client configuration not configured yet. Please contact support center
     * @throws FetchError<422, types.DeleteJobsItemsResponse422> Missing attributes or malformed payload
     */
    deleteJobsItems(body) {
        return this.core.fetch('/jobs/items', 'delete', body);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
