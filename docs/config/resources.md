---
id: resources
title: Resources
---

The main concept in REST Resources is a `Resource`. A Resource should be your representation of entity, model, resource, data, etc. that you send to and receive from an API. It is _recommended_ that this representation be a JavaScript/TypeScript class but any JavaScript `prototype` should work.

REST Resources utilizes decorators to define and configure resources. These decorators are a simple way to provide functionality without writing a lot of code. Each decorator is outlined below. `Resource` and `ResourceKey` are the only required decorators while the others can be used to further configure your specific API interaction; however, provide defaults if not specified.

## @Resource
...

## @ResourceKey
...

## @ResourceApi
...

## @ResourcePaths
...

### IResourcePaths
When specifying resource paths, the paths must meet the `IResourcePaths` interface.

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
