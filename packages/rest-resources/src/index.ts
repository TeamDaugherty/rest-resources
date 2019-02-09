import 'reflect-metadata'
import {Resource} from './decorators/resource.decorator'
import {ResourceApi} from './decorators/resource-api.decorator'
import {ResourceKey} from './decorators/resource-key.decorator'
import {ResourcePaths} from './decorators/resource-paths.decorator'
import {IResourcePaths} from './interfaces/IResourcePaths'
import {IResourceAdapter} from './interfaces/IResourceAdapter'
import {ResourceConfig} from './config/ResourceConfig'
import {ResourceAdapter} from './decorators/resource-adapter.decorator'

export {
  Resource,
  ResourceApi,
  ResourceKey,
  ResourcePaths,
  ResourceAdapter,
  IResourcePaths,
  IResourceAdapter,
  ResourceConfig
}
