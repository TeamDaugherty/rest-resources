import {ResourceConfig} from '../config/ResourceConfig'

const RESOURCE_API_KEY = 'RESOURCE_API_KEY'

function ResourceApi(apiUrl: string) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_API_KEY, apiUrl, target)
  }
}

function applyDefaultResourceApi(target: any) {
  ResourceApi(ResourceConfig.defaultApiRoot)(target)
}

export {
  RESOURCE_API_KEY,
  ResourceApi,
  applyDefaultResourceApi
}
