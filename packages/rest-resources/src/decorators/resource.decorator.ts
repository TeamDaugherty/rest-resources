import {applyDefaultResourcePaths} from './resource-paths.decorator'
import {applyDefaultResourceApi} from './resource-api.decorator'
import {applyDefaultResourceAdapter} from './resource-adapter.decorator'
import {getResourceAdapter, getResourceApi, getResourcePaths} from '../resource.util'

const RESOURCE_NAME_KEY = 'RESOURCE_NAME_KEY'

function Resource(resourceName: string) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_NAME_KEY, resourceName, target)

    // Define default api path if not already defined by @ResourceApi
    if (!getResourceApi(target)) {
      applyDefaultResourceApi(target)
    }

    // Define default paths if not already defined by @ResourcePaths
    if (!getResourcePaths(target)) {
      applyDefaultResourcePaths(resourceName, target)
    }

    // Use default adapter if not specified by @ResourceAdapter
    // Default adapter MUST be specified via ResourceConfig.defaultResourceAdapter
    if (!getResourceAdapter(target)) {
      applyDefaultResourceAdapter(target)
    }
  }
}

export {
  RESOURCE_NAME_KEY,
  Resource
}
