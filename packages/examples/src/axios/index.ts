/* tslint:disable:no-console */
import {Resources} from '@daugherty/rest-resources'
import './config'

import {Company} from './models/Company'
import {Employee} from './models/Employee'
import {AxiosResponse} from 'axios'

(async function() {
  try {
    // Should return 2 because of mock data and using the default adapter
    const companiesResponse: AxiosResponse = await Resources(Company).findAll()
    console.log(`Companies #: ${companiesResponse.data.length}`)
    console.log(`Companies status: ${companiesResponse.status}`)

    const companyResponse: AxiosResponse = await Resources(Company).findByKey('10')
    console.log('Company 10: ')
    console.log(companyResponse.data)

    // Should return 0 because of the custom EmployeeResourceAdapter
    const employeesResponse: AxiosResponse = await Resources(Employee).findAll()
    console.log(`Employees #: ${employeesResponse.data.length}`)
    console.log(`Employees status: ${employeesResponse.status}`)

    const employeeResponse: AxiosResponse = await Resources(Employee).findByKey(5)
    console.log('Employee 5: ')
    console.log(employeeResponse.data)

  } catch (e) {
    console.error('There was an error testing example rest-resources')
    console.error(e)
  }
})()
