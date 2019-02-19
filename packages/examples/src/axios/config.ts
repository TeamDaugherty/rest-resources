import {ResourceConfig} from '@daugherty/rest-resources'
import {AxiosResourceAdapter} from '@daugherty/rest-resources-axios'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {Company} from './models/Company'
import {Employee} from './models/Employee'
import {EmployeeResourceAdapter} from './adapters/EmployeeResourceAdapter'

// Setup REST Resources configuration
ResourceConfig.defaultResourceAdapter = AxiosResourceAdapter.bind(null, axios)
ResourceConfig.registerAdapter(Employee, new EmployeeResourceAdapter(axios))

// Mock data for examples
const mock: MockAdapter = new MockAdapter(axios)

mock.onGet('/api/companies').reply(200, [
  new Company(),
  new Company()
])

const companyTen: Company = new Company()
companyTen.id = '10'
companyTen.description = 'Daugherty Business Solutions'
companyTen.numEmployes = 1200
companyTen.dateFounded = new Date(1985, 5, 1)
mock.onGet('/api/companies/10').reply(200, companyTen)

const employeeFive: Employee = new Employee()
employeeFive.key = 5
employeeFive.firstName = 'Alex'
employeeFive.lastName = 'White'
mock.onGet('/api/employees/5').reply(200, employeeFive)
