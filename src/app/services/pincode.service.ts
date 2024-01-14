import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  //  constructor() { }


  private apiUrl = 'https://api.postalpincode.in/pincode';

  constructor(private http: HttpClient) {
   
  }

  validatePinCode(pincode: string) {
    const url = `${this.apiUrl}/${pincode}`;
    return this.http.get(url);
  }


}
