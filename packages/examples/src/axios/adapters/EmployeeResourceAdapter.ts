import {AxiosResourceAdapter} from '@daugherty/rest-resources-axios'
import {AxiosInstance, AxiosPromise, AxiosResponse} from 'axios'
import {Employee} from '../models/Employee'

export class EmployeeResourceAdapter extends AxiosResourceAdapter<Employee> {
  constructor(axios: AxiosInstance) {
    super(axios, Employee)
  }

  // @Override
  findAll(): AxiosPromise<any> {
    const response: AxiosResponse = {
      status: 202,
      statusText: 'Accepted',
      headers: null,
      config: null,
      data: []
    }
    return Promise.resolve(response)
  }
}
