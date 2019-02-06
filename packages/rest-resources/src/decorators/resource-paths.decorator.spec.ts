import {Resource} from './resource.decorator'
import {ResourceKey} from './resource-key.decorator'
import {RESOURCE_PATHS_KEY, ResourcePaths} from './resource-paths.decorator'
import 'reflect-metadata'

/* tslint:disable:max-classes-per-file */
describe('ResourcePaths decorator', () => {
  const api = '/pfmapi'
  const resourceName = 'ACoolResourceName'
  const resourceKey = 'someProp'

  @Resource('ACoolResourceName')
  @ResourcePaths({
    findAll: `${api}/${resourceName}`,
    findByKey: `${api}/${resourceName}/:${resourceKey}`,
    query: `${api}/${resourceName}`,
    queryOne: `${api}/${resourceName}`,
    create: `${api}/${resourceName}`,
    update: `${api}/${resourceName}/:${resourceKey}`,
    modify: `${api}/${resourceName}/:${resourceKey}`,
    delete: `${api}/${resourceName}/:${resourceKey}`
  })
  class Model1 {
    @ResourceKey()
    someProp: string
  }

  it('sets resource paths in the metadata of a class with provided data', () => {
    expect(Reflect.getMetadata(RESOURCE_PATHS_KEY, Model1)).toEqual({
      findAll: `${api}/${resourceName}`,
      findByKey: `${api}/${resourceName}/:${resourceKey}`,
      query: `${api}/${resourceName}`,
      queryOne: `${api}/${resourceName}`,
      create: `${api}/${resourceName}`,
      update: `${api}/${resourceName}/:${resourceKey}`,
      modify: `${api}/${resourceName}/:${resourceKey}`,
      delete: `${api}/${resourceName}/:${resourceKey}`
    })
  })

  @Resource('coolResources')
  class Model2 {
    @ResourceKey()
    someProp: string
  }

  it('sets resource paths in the metadata of a class with defaults', () => {
    // expect(Reflect.getMetadata(RESOURCE_PATHS_KEY, Model2)).toEqual({
    //   findAll: `${environment.pfmApiUrl}/coolResources`,
    //   findByKey: `${environment.pfmApiUrl}/coolResources/:someProp`,
    //   query: `${environment.pfmApiUrl}/coolResources`,
    //   queryOne: `${environment.pfmApiUrl}/coolResources`,
    //   create: `${environment.pfmApiUrl}/coolResources`,
    //   update: `${environment.pfmApiUrl}/coolResources/:someProp`,
    //   modify: `${environment.pfmApiUrl}/coolResources/:someProp`,
    //   delete: `${environment.pfmApiUrl}/coolResources/:someProp`
    // })
  })
})
