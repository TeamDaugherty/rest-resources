import {applyDefaultResourceApi, RESOURCE_API_KEY} from './resource-api.decorator'
import {IResourcePaths} from '../interfaces/IResourcePaths'
import {RESOURCE_KEY_KEY} from './resource-key.decorator'
import {getResourceApi, getResourceKey} from '../resource.util'

const RESOURCE_PATHS_KEY = 'RESOURCE_PATHS_KEY'

function ResourcePaths<R>(paths: Partial<IResourcePaths>) {
  return (ResourceType: new() => R) => {
    Reflect.defineMetadata(RESOURCE_PATHS_KEY, paths, ResourceType)
  }
}

// TODO: Handle partial overrides (merge provided with defaults)

function applyDefaultResourcePaths(resourceName: string, target: any): void {
  ResourcePaths(getDefaultResourcePaths(resourceName, target))(target)
}

function getDefaultResourcePaths<R>(resourceName: string, ResourceType: new() => R): IResourcePaths {
  if (!getResourceApi(ResourceType)) {
    applyDefaultResourceApi(ResourceType)
  }

  if (!getResourceKey(ResourceType)) {
    throw new Error('@ResourceKey() must be provided on the property which the API considers as the "key"')
  }

  const api = Reflect.getMetadata(RESOURCE_API_KEY, ResourceType)
  const resourceKey = Reflect.getMetadata(RESOURCE_KEY_KEY, ResourceType)
  return {
    findAll: `${api}/${resourceName}`,
    findByKey: `${api}/${resourceName}/:${resourceKey}`,
    query: `${api}/${resourceName}`,
    queryOne: `${api}/${resourceName}`,
    create: `${api}/${resourceName}`,
    update: `${api}/${resourceName}/:${resourceKey}`,
    modify: `${api}/${resourceName}/:${resourceKey}`,
    delete: `${api}/${resourceName}/:${resourceKey}`
  }
}

export {
  RESOURCE_PATHS_KEY,
  ResourcePaths,
  applyDefaultResourcePaths
}
