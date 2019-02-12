import {RESOURCE_NAME_KEY} from './decorators/resource.decorator'
import {RESOURCE_KEY_KEY} from './decorators/resource-key.decorator'
import {RESOURCE_PATHS_KEY} from './decorators/resource-paths.decorator'
import {RESOURCE_API_KEY} from './decorators/resource-api.decorator'
import {IResourcePaths} from './interfaces/IResourcePaths'
import {IResourceAdapter} from './interfaces/IResourceAdapter'
import {RESOURCE_ADAPTER_KEY} from './decorators/resource-adapter.decorator'

function getResourceName<T>(ResourceType: new() => T): string {
  return Reflect.getMetadata(RESOURCE_NAME_KEY, ResourceType)
}

function getResourceKey<T>(ResourceType: new() => T): string {
  return Reflect.getMetadata(RESOURCE_KEY_KEY, ResourceType)
}

function getResourcePaths<T>(ResourceType: new() => T): IResourcePaths {
  return Reflect.getMetadata(RESOURCE_PATHS_KEY, ResourceType)
}

function getResourceApi<T>(ResourceType: new() => T): string {
  return Reflect.getMetadata(RESOURCE_API_KEY, ResourceType)
}

function getResourceAdapter<T>(ResourceType: new() => T): IResourceAdapter<T> {
  return Reflect.getMetadata(RESOURCE_ADAPTER_KEY, ResourceType)
}

export {
  getResourceName,
  getResourceKey,
  getResourcePaths,
  getResourceApi,
  getResourceAdapter
}
