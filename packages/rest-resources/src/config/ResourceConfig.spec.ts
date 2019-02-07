import 'reflect-metadata'
import {ResourceConfig} from './ResourceConfig'

describe('Resource config', () => {

  it('allows assignment of default api root', () => {
    ResourceConfig.defaultApiRoot = 'some-unique-api'

    expect(ResourceConfig.defaultApiRoot).toEqual('some-unique-api')
  })
})
