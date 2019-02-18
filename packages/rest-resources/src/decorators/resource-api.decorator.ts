import {ResourceConfig} from '../config/ResourceConfig'

const RESOURCE_API_KEY = 'RESOURCE_API_KEY'

function ResourceApi<R>(apiUrl: string) {
  return (ResourceType: new() => R) => {
    Reflect.defineMetadata(RESOURCE_API_KEY, apiUrl, ResourceType)
  }
}

function applyDefaultResourceApi<R>(ResourceType: new() => R) {
  ResourceApi(ResourceConfig.defaultApiRoot)(ResourceType)
}

export {
  RESOURCE_API_KEY,
  ResourceApi,
  applyDefaultResourceApi
}
