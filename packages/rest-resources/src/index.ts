import 'reflect-metadata'
import {Resource} from './decorators/resource.decorator'
import {ResourceApi} from './decorators/resource-api.decorator'
import {ResourceKey} from './decorators/resource-key.decorator'
import {ResourcePaths} from './decorators/resource-paths.decorator'
import {IResourcePaths} from './interfaces/IResourcePaths'
import {ResourceConfig} from './config/ResourceConfig'
import {getResourceAdapter, getResourceApi, getResourceKey, getResourceName, getResourcePaths} from './resource.util'
import {Resources} from './resources'
import {IResourceAdapter, IResourceParams} from './interfaces/IResourceAdapter'

export {
  Resource,
  ResourceApi,
  ResourceKey,
  ResourcePaths,

  Resources,

  IResourceAdapter,
  IResourcePaths,
  IResourceParams,
  ResourceConfig,

  getResourceName,
  getResourceKey,
  getResourcePaths,
  getResourceApi,
  getResourceAdapter
}
