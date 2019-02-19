import {IResourceAdapter} from '../interfaces/IResourceAdapter'
import {getResourceAdapter, setResourceAdapter} from '../resource.util'

class ResourceConfig {
  static defaultApiRoot = '/api'
  static defaultResourceAdapter: new(ResourceType: new() => any) => IResourceAdapter<any>

  static registerAdapter<R>(ResourceType: new() => R, adapter: IResourceAdapter<R>): void {
    if (getResourceAdapter(ResourceType)) {
      throw new Error(`An adapter has already been registered for type ${ResourceType}`)
    }

    setResourceAdapter(ResourceType, adapter)
  }

  // TODO: Add default api Paths
}

export {
  ResourceConfig
}
