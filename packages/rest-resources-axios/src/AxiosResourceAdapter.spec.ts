import axios from 'axios'
import {Resource, ResourceKey, ResourcePaths} from '@daugherty/rest-resources'
import {AxiosResourceAdapter} from './AxiosResourceAdapter'

describe('AxiosResourceAdapter', () => {
  let Adapter: AxiosResourceAdapter<TestModel>

  @Resource('TestModels')
  @ResourcePaths({
    findAll: 'test-models-findAll',
    findByKey: 'test-models-findByKey-:testKey',
    query: 'test-models-query',
    queryOne: 'test-models-queryOne',
    create: 'test-models-create',
    update: 'test-models-update-:testKey',
    modify: 'test-models-modify-:testKey',
    delete: 'test-models-delete-:testKey'
  })
  class TestModel {
    @ResourceKey()
    testKey: string
  }

  beforeEach(() => {
    Adapter = new AxiosResourceAdapter(TestModel)
  })

  it('makes a POST request to create a resource', () => {
    spyOn(axios, 'post')
    const model = new TestModel()

    Adapter.create(model)

    expect(axios.post).toHaveBeenCalledWith('test-models-create', model)
  })

  it('makes a DELETE request to delete a resource', () => {
    spyOn(axios, 'delete')

    Adapter.delete('abc123')

    expect(axios.delete).toHaveBeenCalledWith('test-models-delete-abc123')
  })

  it('makes a GET request to find all resources', () => {
    spyOn(axios, 'get')

    Adapter.findAll()

    expect(axios.get).toHaveBeenCalledWith('test-models-findAll')
  })

  it('makes a GET request to find a resource by key', () => {
    spyOn(axios, 'get')

    Adapter.findByKey('abc123')

    expect(axios.get).toHaveBeenCalledWith('test-models-findByKey-abc123')
  })

  it('makes a PATCH request to modify a resource', () => {
    spyOn(axios, 'patch')
    const model = new TestModel()

    Adapter.modify('abc123', model)

    expect(axios.patch).toHaveBeenCalledWith('test-models-modify-abc123', model)
  })

  it('makes a GET request to query for resources', () => {
    spyOn(axios, 'get')
    const params = {
      sortAsc: true,
      filterBy: 'name'
    }

    Adapter.query(params)

    expect(axios.get).toHaveBeenCalledWith('test-models-query', {params})
  })

  it('makes a GET request to query for a single resource', () => {
    spyOn(axios, 'get')
    const params = {
      id: 'abc123',
      wip: true
    }

    Adapter.queryOne(params)

    expect(axios.get).toHaveBeenCalledWith('test-models-queryOne', {params})
  })

  it('makes a PUT request to update a resource', () => {
    spyOn(axios, 'put')
    const model = new TestModel()
    model.testKey = 'abc123'

    Adapter.update(model)

    expect(axios.put).toHaveBeenCalledWith('test-models-update-abc123', model)
  })

  it('throws an error making a PUT request to update a resource without the key provided', () => {
    spyOn(axios, 'put')
    const model = new TestModel()

    expect(() => {
      Adapter.update(model)
    }).toThrowError('The value of the resource key property \'testKey\' was not provided on the modified resource payload')
  })
})
