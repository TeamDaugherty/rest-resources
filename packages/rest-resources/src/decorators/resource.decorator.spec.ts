import {Resource, RESOURCE_NAME_KEY} from './resource.decorator'
import {ResourceKey} from '..'
import * as ResourcePathsDecorator from './resource-paths.decorator'

describe('Resource decorator', () => {
  let Model: any

  beforeEach(() => {
    spyOn(ResourcePathsDecorator, 'applyDefaultResourcePaths')

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
    expect(ResourcePathsDecorator.applyDefaultResourcePaths).toHaveBeenCalledWith('ACoolResourceName', jasmine.any(Function))
  })
})
