import {IResourceAdapter, IResourceParams} from '@daugherty/rest-resources'

export class AxiosResourceAdapter<R> implements IResourceAdapter<R> {
  // TODO: Need type info for getting metadata

  create(resource: R): any {
    // TODO
  }

  delete(resourceKey?: any): any {
    // TODO
  }

  findAll(): any {
    // TODO
  }

  findByKey(resourceKey: any): any {
    // TODO
  }

  modify(resource: Partial<R>): any {
    // TODO
  }

  query(params?: IResourceParams): any {
    // TODO
  }

  queryOne(params?: IResourceParams): any {
    // TODO
  }

  update(resource: R): any {
    // TODO
  }
}
