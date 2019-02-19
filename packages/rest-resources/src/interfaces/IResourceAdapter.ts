/* tslint:disable:no-empty-interface */
export interface IResourceParams {
}

export interface IResourceAdapter<R> {
  findAll(): any // Gets all of the resource
  findByKey(resourceKey: any): any // Gets a single resource by key
  query(params?: IResourceParams): any // Queries for a list of resources given the query params
  queryOne(params?: IResourceParams): any // When we don't know the id but we know the endpoint will give us a single resource
  create(resource: R): any // Creates a resource
  update(resource: R): any // Updates a resource
  modify(resourceKey: any, resource: Partial<R>): any // Modifies (patches) a resource
  delete(resourceKey: any): any // Delete by key
}
