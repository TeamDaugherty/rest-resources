import {applyDefaultResourcePaths, RESOURCE_PATHS_KEY} from './resource-paths.decorator'
import {applyDefaultResourceApi, RESOURCE_API_KEY} from './resource-api.decorator'
import {applyDefaultResourceAdapter, RESOURCE_ADAPTER_KEY} from './resource-adapter.decorator'

const RESOURCE_NAME_KEY = 'RESOURCE_NAME_KEY'

function Resource(resourceName: string) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_NAME_KEY, resourceName, target)

    // Define default api path if not already defined by @ResourceApi
    if (!Reflect.getMetadata(RESOURCE_API_KEY, target)) {
      applyDefaultResourceApi(target)
    }

    // Define default paths if not already defined by @ResourcePaths
    if (!Reflect.getMetadata(RESOURCE_PATHS_KEY, target)) {
      applyDefaultResourcePaths(resourceName, target)
    }

    // Use default adapter if not specified by @ResourceAdapter
    // Default adapter MUST be specified via ResourceConfig.defaultResourceAdapter
    if (!Reflect.getMetadata(RESOURCE_ADAPTER_KEY, target)) {
      applyDefaultResourceAdapter(target)
    }
  }
}

export {
  RESOURCE_NAME_KEY,
  Resource
}
