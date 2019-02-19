import {RESOURCE_NAME_KEY} from './decorators/resource.decorator'
import {RESOURCE_KEY_KEY} from './decorators/resource-key.decorator'
import {RESOURCE_PATHS_KEY} from './decorators/resource-paths.decorator'
import {RESOURCE_API_KEY} from './decorators/resource-api.decorator'
import {IResourcePaths} from './interfaces/IResourcePaths'
import {IResourceAdapter} from './interfaces/IResourceAdapter'

const RESOURCE_ADAPTER_KEY = 'RESOURCE_ADAPTER_KEY'

function getResourceName<R>(ResourceType: new() => R): string {
  return Reflect.getMetadata(RESOURCE_NAME_KEY, ResourceType)
}

function getResourceKey<R>(ResourceType: new() => R): string {
  return Reflect.getMetadata(RESOURCE_KEY_KEY, ResourceType)
}

function getResourcePaths<R>(ResourceType: new() => R): IResourcePaths {
  return Reflect.getMetadata(RESOURCE_PATHS_KEY, ResourceType)
}

function getResourceApi<R>(ResourceType: new() => R): string {
  return Reflect.getMetadata(RESOURCE_API_KEY, ResourceType)
}

function getResourceAdapter<R>(ResourceType: new() => R): IResourceAdapter<R> {
  return Reflect.getMetadata(RESOURCE_ADAPTER_KEY, ResourceType)
}

function setResourceAdapter<R>(ResourceType: new() => R, adapter: IResourceAdapter<R>) {
  Reflect.defineMetadata(RESOURCE_ADAPTER_KEY, adapter, ResourceType)
}

export {
  getResourceName,
  getResourceKey,
  getResourcePaths,
  getResourceApi,
  getResourceAdapter,
  setResourceAdapter
}
