import {Resource} from './resource.decorator'
import {ResourceKey} from './resource-key.decorator'
import 'reflect-metadata'
import {ResourceConfig} from '../config/ResourceConfig'
import {RESOURCE_ADAPTER_KEY, ResourceAdapter} from './resource-adapter.decorator'
import {IResourceAdapter} from '..'
import {IResourceParams} from '../interfaces/IResourceAdapter'

/* tslint:disable:max-classes-per-file */
describe('ResourceAdapter Decorator', () => {
  class Adapter implements IResourceAdapter<Model1> {
    create(resource: Model1): any {}
    delete(resourceKey?: any): any {}
    findAll(): any {}
    findByKey(resourceKey: any): any {}
    modify(resource: Partial<Model1>): any {}
    query(params?: IResourceParams): any {}
    queryOne(params?: IResourceParams): any {}
    update(resource: Model1): any {}
  }

  @Resource('ACoolResourceName')
  @ResourceAdapter(Adapter)
  class Model1 {
    @ResourceKey()
    someProp: string
  }

  it('adds resource adapter in the metadata of a class with the value provided', () => {
    expect(Reflect.getMetadata(RESOURCE_ADAPTER_KEY, Model1)).toEqual(Adapter)
  })

  @Resource('ACoolResourceName')
  class Model2 {
    @ResourceKey()
    someProp: string
  }

  it('adds default resource adapter in the metadata of a class when one is not provided', () => {
    expect(Reflect.getMetadata(RESOURCE_ADAPTER_KEY, Model2)).toEqual(ResourceConfig.defaultResourceAdapter)
  })
})
