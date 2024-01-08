import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmpoloyees(){
    return[
      {"id":1,"name":"vaish","age":22},
      {"id":2,"name":"ram","age":18},
      {"id":3,"name":"suraj","age":40},
      {"id":4,"name":"riya","age":17},
      {"id":5,"name":"rupesh","age":35},
      {"id":6,"name":"payal","age":25},
      {"id":7,"name":"shruti","age":23},
      {"id":8,"name":"aditi","age":20},
      {"id":9,"name":"kushal","age":18},
      {"id":10,"name":"vinay","age":29},
    ]
  }
}
