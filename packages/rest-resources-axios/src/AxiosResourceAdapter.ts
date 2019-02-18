import {getResourceKey, getResourcePaths, IResourceAdapter, IResourceParams} from '@daugherty/rest-resources'
import axios, {AxiosPromise} from 'axios'

export class AxiosResourceAdapter<R> implements IResourceAdapter<R> {
  constructor(protected ResourceType: new() => R) {

  }

  create(resource: R): AxiosPromise<any> {
    return axios.post(getResourcePaths(this.ResourceType).create, resource)
  }

  delete(resourceKey: any): AxiosPromise<any> {
    const url = this.replaceUriResourceKeySegment(getResourcePaths(this.ResourceType).delete, resourceKey)
    return axios.delete(url)
  }

  findAll(): AxiosPromise<any> {
    return axios.get(getResourcePaths(this.ResourceType).findAll)
  }

  findByKey(resourceKey: any): AxiosPromise<any> {
    const url = this.replaceUriResourceKeySegment(getResourcePaths(this.ResourceType).findByKey, resourceKey)
    return axios.get(url)
  }

  modify(resourceKey: any, resource: Partial<R>): AxiosPromise<any> {
    const url = this.replaceUriResourceKeySegment(getResourcePaths(this.ResourceType).modify, resourceKey)
    return axios.patch(url, resource)
  }

  query(params?: IResourceParams): AxiosPromise<any> {
    return axios.get(getResourcePaths(this.ResourceType).query, {params})
  }

  queryOne(params?: IResourceParams): AxiosPromise<any> {
    return axios.get(getResourcePaths(this.ResourceType).queryOne, {params})
  }

  update(resource: R): AxiosPromise<any> {
    const key = this.getResourceKey(resource)
    const url = this.replaceUriResourceKeySegment(getResourcePaths(this.ResourceType).update, key)
    return axios.put(url, resource)
  }

  protected getResourceKey(resource: Partial<R>): string {
    const resourceKey = getResourceKey(this.ResourceType)
    const key: string = (resource as any)[resourceKey] as string
    if (!key) {
      throw new Error(`The value of the resource key property '${resourceKey}' was not provided on the modified resource payload`)
    }

    return key
  }

  protected replaceUriResourceKeySegment(url: string, resourceKey: any): string {
    return url.replace(`:${getResourceKey(this.ResourceType)}`, resourceKey)
  }
}
