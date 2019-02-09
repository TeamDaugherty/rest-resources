import {IResourceAdapter, ResourceConfig} from '..'

const RESOURCE_ADAPTER_KEY = 'RESOURCE_ADAPTER_KEY'

function ResourceAdapter(resourceAdapter: new() => IResourceAdapter<any>) {
  return (target: any) => {
    Reflect.defineMetadata(RESOURCE_ADAPTER_KEY, resourceAdapter, target)
  }
}

function applyDefaultResourceAdapter(target: any) {
  ResourceAdapter(ResourceConfig.defaultResourceAdapter)(target)
}

export {
  RESOURCE_ADAPTER_KEY,
  ResourceAdapter,
  applyDefaultResourceAdapter
}
