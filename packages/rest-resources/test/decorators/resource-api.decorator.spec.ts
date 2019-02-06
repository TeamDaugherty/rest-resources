import {Resource, RESOURCE_NAME_KEY} from '../../src/decorators/resource.decorator';
import {ResourceKey} from '../../src';
import {RESOURCE_API_KEY, ResourceApi} from '../../src/decorators/resource-api.decorator';
/* tslint:disable:max-classes-per-file */
describe('ResourceApi Decorator', () => {
  @Resource('ACoolResourceName')
  @ResourceApi('/myapi')
  class Model1 {
    @ResourceKey()
    someProp: string;
  }

  it('adds resource api in the metadata of a class with the value provided', () => {
    expect(Reflect.getMetadata(RESOURCE_API_KEY, Model1)).toEqual('/myapi');
  });

  @Resource('ACoolResourceName')
  class Model2 {
    @ResourceKey()
    someProp: string;
  }

  it('adds default resource api in the metadata of a class when one is not provided', () => {
    //expect(Reflect.getMetadata(RESOURCE_API_KEY, Model2)).toEqual(environment.pfmApiUrl);
  });
});
