import {IResourceAdapter, ResourceConfig} from '..'

const RESOURCE_ADAPTER_KEY = 'RESOURCE_ADAPTER_KEY'

function ResourceAdapter<R>(resourceAdapter: IResourceAdapter<R>) {
  return (ResourceType: new() => R) => {
    Reflect.defineMetadata(RESOURCE_ADAPTER_KEY, resourceAdapter, ResourceType)
  }
}

function applyDefaultResourceAdapter<R>(ResourceType: new() => R) {
  ResourceAdapter(ResourceConfig.defaultResourceAdapter)(ResourceType)
}

export {
  RESOURCE_ADAPTER_KEY,
  ResourceAdapter,
  applyDefaultResourceAdapter
}
