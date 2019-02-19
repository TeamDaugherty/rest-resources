import {getResourceAdapter, setResourceAdapter} from './resource.util'
import {IResourceAdapter} from './interfaces/IResourceAdapter'
import {ResourceConfig} from './config/ResourceConfig'

export function Resources<R>(ResourceType: new() => R): IResourceAdapter<R> {
  let adapter: IResourceAdapter<R> = getResourceAdapter(ResourceType)

  if (!adapter) {
    adapter = new ResourceConfig.defaultResourceAdapter(ResourceType)
    // tslint:disable-next-line:no-console
    console.log(adapter)
    setResourceAdapter(ResourceType, adapter)
  }

  return adapter
}
