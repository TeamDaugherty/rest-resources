import {IResourceAdapter} from '..'

class ResourceConfig {
  static defaultApiRoot = '/api'
  static defaultResourceAdapter: new() => IResourceAdapter<any> = null

  // TODO: Add default api Paths
}

export {
  ResourceConfig
}
