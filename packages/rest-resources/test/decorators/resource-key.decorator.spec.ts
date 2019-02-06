import {RESOURCE_KEY_KEY, ResourceKey} from '../../src/decorators/resource-key.decorator';
import 'reflect-metadata';

describe('ResourceKey decorator', () => {
  class Model1 {
    @ResourceKey()
    someProp: string;
  }

  it('adds resource key on the metadata of a class with the value of the property name', () => {
    expect(Reflect.getMetadata(RESOURCE_KEY_KEY, Model1)).toEqual('someProp');
  });
});
