import {Resource, RESOURCE_NAME_KEY} from './resource.decorator'
import {ResourceKey} from './resource-key.decorator'
import * as ResourcePathsDecorator from './resource-paths.decorator'
import * as ResourceApiDecorator from './resource-api.decorator'
import 'reflect-metadata'

describe('Resource decorator', () => {
  let Model: any

  beforeEach(() => {
    spyOn(ResourcePathsDecorator, 'applyDefaultResourcePaths')
    spyOn(ResourceApiDecorator, 'applyDefaultResourceApi')

    @Resource('ACoolResourceName')
    class Model1 {
      @ResourceKey()
      someProp: string
    }

    Model = Model1
  })

  it('adds resource name in the metadata of a class with the value provided', () => {
    expect(Reflect.getMetadata(RESOURCE_NAME_KEY, Model)).toEqual('ACoolResourceName')
  })

  it('sets default resource paths when not already defined', () => {
    expect(ResourcePathsDecorator.applyDefaultResourcePaths).toHaveBeenCalledWith('ACoolResourceName', Model)
  })

  it('sets default API root when not already defined', () => {
    expect(ResourceApiDecorator.applyDefaultResourceApi).toHaveBeenCalledWith(Model)
  })
})
