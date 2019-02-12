import {IResourceAdapter} from './interfaces/IResourceAdapter'
import {getResourceAdapter} from './resource.util'

export function Resources<T>(ResourceType: new() => T): IResourceAdapter<T> {
  return getResourceAdapter(ResourceType)
}
