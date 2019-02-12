import 'reflect-metadata'
import {Resource} from './decorators/resource.decorator'
import {ResourceApi} from './decorators/resource-api.decorator'
import {ResourceKey} from './decorators/resource-key.decorator'
import {ResourcePaths} from './decorators/resource-paths.decorator'
import {IResourcePaths} from './interfaces/IResourcePaths'
import {IResourceAdapter, IResourceParams} from './interfaces/IResourceAdapter'
import {ResourceConfig} from './config/ResourceConfig'
import {ResourceAdapter} from './decorators/resource-adapter.decorator'
import {getResourceAdapter, getResourceApi, getResourceKey, getResourceName, getResourcePaths} from './resource.util'
import {Resources} from './resources'

export {
  Resource,
  ResourceApi,
  ResourceKey,
  ResourcePaths,
  ResourceAdapter,

  Resources,

  IResourcePaths,
  IResourceAdapter,
  IResourceParams,
  ResourceConfig,

  getResourceName,
  getResourceKey,
  getResourcePaths,
  getResourceApi,
  getResourceAdapter
}
