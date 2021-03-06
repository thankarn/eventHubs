"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { BUILD_NUM, CONNECTIONSTRING, URLLOCAL, AAD_EVC_BO_API_ENDPOINT, AAD_EVC_APP_API_ENDPOINT, AAD_CMM_API_ENDPOINT, APP_INSIGHT_KEY, LOG_AZ_TABLE_STORAGE_LOG_LEVEL, LOG_AZ_TABLE_STORAGE_TABLE, LOG_AZ_TABLE_STORAGE_PATITION, LOG_AZ_TABLE_STORAGE_ACC_NAME, LOG_AZ_TABLE_STORAGE_ACC_KEY, AUTHORITY_HOST_URL, AZURE_DIRECTORY_TENANT_ID, AZURE_APPLICATION_ID, AZURE_CLIENT_SECRET, AZURE_RESOURCE, STORAGE_CONNECTION_STRING, EVENTHUB_NAME, STORAGE_CONTAINER_NAME, EVENT_HUB_CONSUMER_GROUP, STORAGE_CONTAINER_URL } = process.env;
exports.default = {
    BUILD_NUM,
    CONNECTIONSTRING,
    URLLOCAL,
    AAD_EVC_BO_API_ENDPOINT,
    AAD_EVC_APP_API_ENDPOINT,
    AAD_CMM_API_ENDPOINT,
    APP_INSIGHT_KEY,
    LOG_AZ_TABLE_STORAGE_LOG_LEVEL,
    LOG_AZ_TABLE_STORAGE_TABLE,
    LOG_AZ_TABLE_STORAGE_PATITION,
    LOG_AZ_TABLE_STORAGE_ACC_NAME,
    LOG_AZ_TABLE_STORAGE_ACC_KEY,
    AUTHORITY_HOST_URL,
    AAD_TENANT_ID: AZURE_DIRECTORY_TENANT_ID,
    AAD_EVC_APP_API_SP_CLIENT_ID: AZURE_APPLICATION_ID,
    AAD_EVC_APP_API_SP_CLIENT_SECRET: AZURE_CLIENT_SECRET,
    AZURE_RESOURCE,
    STORAGE_CONNECTION_STRING,
    EVENTHUB_NAME,
    STORAGE_CONTAINER_NAME,
    EVENT_HUB_CONSUMER_GROUP,
    STORAGE_CONTAINER_URL
};
//# sourceMappingURL=env.js.map