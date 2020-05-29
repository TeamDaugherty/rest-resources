---
id: per-resource-adapters
title: Per-Resource Adapters
---

In some cases, using a single `ResourceAdapter` for all `Resource`s is insufficient. A `Resource` may interact with an API that follows a different convention than the default. For example, an API might return data in a different structure for one `Resource` vs another, some additional logic may need to be performed when getting data for one `Resource`, and/or you might be transitioning from one API pattern to another and not all `Resource`s have been migrated to that pattern. For this case, a `ResourceAdapter` can be "registered" to a `Resource` prototype which will be used instead of the default.

For example, here is an `EmployeeResourceAdapter` which extends the base `AxiosResourceAdapter` (included in `@daugherty/rest-resources-axios`) and overrides `findAll`. All other functions from the `AxiosResourceAdapter` are unchanged.

```typescript
import {AxiosResourceAdapter} from '@daugherty/rest-resources-axios'
import {AxiosInstance, AxiosPromise, AxiosResponse} from 'axios'
import Employee from './resources/Employee'

class EmployeeResourceAdapter extends AxiosResourceAdapter<Employee> {
  constructor(axios: AxiosInstance) {
    super(axios, Employee)
  }

  // @Override
  findAll(): AxiosPromise<any> {
    return axios.get('/path/to/some/alternate/url')
  }
}
```

In order for `rest-resources` to use this custom adapter for `Employee`, it should be registered: 
```typescript
import axios from 'axios'
import {ResourceConfig} from '@daugherty/rest-resources'
import Employee from './resources/Employee'
import {EmployeeResourceAdapter} from './adapters/EmployeeResourceAdapter'

ResourceConfig.registerAdapter(Employee, new EmployeeResourceAdapter(axios))
```

> NOTE: A custom adapter does not need to extend an existing adapter. It only needs to implement the [`IResourceAdapter`](per-resource-adapters.md#iresourceadapter)

## IResourceAdapter
 A custom adapter needs to implement `IResourceAdapter`. This can be a completely custom class or an extension of one of the provided base resource adapters (e.g. axios).
 
 ```typescript
 interface IResourceParams {
 }
 
 interface IResourceAdapter<R> {
   findAll(): any // Gets all of the resource
   findByKey(resourceKey: any): any // Gets a single resource by key
   query(params?: IResourceParams): any // Queries for a list of resources given the query params
   queryOne(params?: IResourceParams): any // When we don't know the id but we know the endpoint will give us a single resource
   create(resource: R): any // Creates a resource
   update(resource: R): any // Updates a resource
   modify(resourceKey: any, resource: Partial<R>): any // Modifies (patches) a resource
   delete(resourceKey: any): any // Delete by key
 }
 ```
