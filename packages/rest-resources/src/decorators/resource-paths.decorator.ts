import {applyDefaultResourceApi, RESOURCE_API_KEY} from './resource-api.decorator'
import {IResourcePaths} from '../interfaces/IResourcePaths'
import {RESOURCE_KEY_KEY} from './resource-key.decorator'
import {getResourceApi, getResourceKey} from '../resource.util'

const RESOURCE_PATHS_KEY = 'RESOURCE_PATHS_KEY'

function ResourcePaths(paths: IResourcePaths) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_PATHS_KEY, paths, target)
  }
}

function applyDefaultResourcePaths(resourceName: string, target: any): void {
  ResourcePaths(getDefaultResourcePaths(resourceName, target))(target)
}

function getDefaultResourcePaths(resourceName: string, target: any): IResourcePaths {
  if (!getResourceApi(target)) {
    applyDefaultResourceApi(target)
  }

  if (!getResourceKey(target)) {
    throw new Error('@ResourceKey() must be provided on the property which the API considers as the "key"')
  }

  const api = Reflect.getMetadata(RESOURCE_API_KEY, target)
  const resourceKey = Reflect.getMetadata(RESOURCE_KEY_KEY, target)
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
