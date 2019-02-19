import {applyDefaultResourcePaths} from './resource-paths.decorator'
import {applyDefaultResourceApi} from './resource-api.decorator'
import {getResourceApi, getResourcePaths} from '../resource.util'

const RESOURCE_NAME_KEY = 'RESOURCE_NAME_KEY'

function Resource<R>(resourceName: string) {
  return (ResourceType: new() => R) => {
    Reflect.defineMetadata(RESOURCE_NAME_KEY, resourceName, ResourceType)

    // Define default api path if not already defined by @ResourceApi
    if (!getResourceApi(ResourceType)) {
      applyDefaultResourceApi(ResourceType)
    }

    // Define default paths if not already defined by @ResourcePaths
    if (!getResourcePaths(ResourceType)) {
      applyDefaultResourcePaths(resourceName, ResourceType)
    }
  }
}

export {
  RESOURCE_NAME_KEY,
  Resource
}
