---
id: resources
title: Resources
---

The main concept in REST Resources is a `Resource`. A Resource should be your representation of entity, model, resource, data, etc. that you send to and receive from an API. It is _recommended_ that this representation be a JavaScript/TypeScript class but any JavaScript `prototype` should work.

REST Resources utilizes decorators to define and configure resources. These decorators are a simple way to provide functionality without writing a lot of code. Each decorator is outlined below. `Resource` and `ResourceKey` are the only required decorators while the others can be used to further configure your specific API interaction; however, provide defaults if not specified.

## @Resource and @ResourceKey
A `Resource` is the representation of a RESTful resource from which the capabilities of this library come. This decorator should be used on a class and requires a single argument which represents the resource path within the API through which the resource can be accessed.

A `ResourceKey` should be provided on the class property which identifies the resource. Typically `id`, `key`, or similar.

```typescript
import {Resource, ResourceKey} from '@daugherty/rest-resources'

@Resource('employees')
class Employee {
  @ResourceKey()
  id: string

  givenName: string
  familyName: string
  birthdate: Date
}
```

The above example sets up a resource `employees` on a class `Employee` and specifies the `id` property as the resource key. The following code snippet shows how API calls would be invoked given the above configuration.

```typescript
import {Resources} from '@daugherty/rest-resources'
import Employee from 'your-code/models/Employee'

Resources(Employee).findAll() // GET /api/employees

Resources(Employee).findByKey('1234') // GET /api/employees/1234

Resources(Employee).query({ sortBy: 'familyName', limit: 10 }) // GET /api/employees?sortBy=familyName&limit=10

Resources(Employee).queryOne({ familyName: 'White', givenName: 'Alex' }) // GET /api/employees?familyName=White&givenName=Alex

const newEmployee = new Employee()
Resources(Employee).create(newEmployee) // POST /api/employees

const existingEmployee = new Employee({ id: '9876'})
Resources(Employee).update(existingEmployee) // PUT /api/employees/9876

const existingEmployeeId = '9876'
const existingEmployee = new Employee({ givenName: 'Alex' })
Resources(Employee).modify(existingEmployeeId, existingEmployee) // PATCH /api/employees/9876

const existingEmployeeId = '9876'
Resources(Employee).delete(existingEmployeeId) // DELETE /api/employees/9876
```

## @ResourceApi
Providing `ResourceApi` on the `Resource` class will override the default resource api path for that `Resource`.

```typescript
import {Resource, ResourceApi, ResourceKey} from '@daugherty/rest-resources'

@Resource('employees')
@ResourceApi('https://my-api.com')
class Employee {
  @ResourceKey()
  id: string

  givenName: string
  familyName: string
  birthdate: Date
}
```

The above example will use `https://my-api.com` in its API requests instead of the default (either `/api` or the value provided at `ResourceConfig.defaultApiRoot`)

For example:
```typescript
import {Resources} from '@daugherty/rest-resources'
import Employee from 'your-code/models/Employee'

Resources(Employee).findAll() // GET https://my-api.com/employees

Resources(Employee).findByKey('1234') // GET https://my-api.com/employees/1234

//...
```

## @ResourcePaths
Including `@ResourcePaths` in your `Resource` will allow you to specify different paths your API might use that differ from the defaults. If you choose to provide paths, your override must include keys found in `IResourcePaths` (see below). i.e. `findByKey`, `create`, etc.

### IResourcePaths
When specifying resource paths, the paths must meet the interface `Partial<IResourcePaths>`. Your paths will be merged with the default paths where the paths you define override the default.

```typescript
interface IResourcePaths {
  findAll: string // GET - fetches all of this resource
  findByKey: string // GET - fetches specific resource by key/identifier
  query: string // GET - fetches all resources by query criteria
  queryOne: string // GET - fetches a single resource by query criteria
  create: string // POST - creates a resource
  update: string // PUT - updates a resource (fully)
  modify: string // PATCH - updates a resource (partially)
  delete: string // DELETE - deletes a resource
}
```

If not provided, the defaults will be used:
```typescript
{
    findAll: `${api}/${resourceName}`,
    findByKey: `${api}/${resourceName}/:${resourceKey}`,
    query: `${api}/${resourceName}`,
    queryOne: `${api}/${resourceName}`,
    create: `${api}/${resourceName}`,
    update: `${api}/${resourceName}/:${resourceKey}`,
    modify: `${api}/${resourceName}/:${resourceKey}`,
    delete: `${api}/${resourceName}/:${resourceKey}`
}
```

## Resources()
In order to invoke the API calls for a `Resource`, you must invoke the `Resources` function with the `Resource` prototype as its argument. This function will return the `ResourceAdapter` which is defined, or generated, for your `Resource` prototype.

For example:
```typescript
import {Resource, ResourceKey} from '@daugherty/rest-resources'

@Resource('employees')
class Employee {
  @ResourceKey()
  id: string

  givenName: string
  familyName: string
  birthdate: Date
}
```

```typescript
import {Resources} from '@daugherty/rest-resources'
import Employee from './resources/Employee'

(async function() {
  const employees = await Resources(Employee).findAll()
})()
```

> NOTE: Ideally the `Resources` function would not be necessary, however, due to a limitation of TypeScript not allowing the class/prototype definition to be changed by a Decorator, an alternative approach was needed. This issue is discussed [here](https://github.com/Microsoft/TypeScript/issues/4881)

