import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeService implements OnInit {

  //  constructor() { }


  private apiUrl = `https://api.postalpincode.in/pincode`;
 
ngOnInit(): void {
    
}
  constructor(private http: HttpClient) {
   
  }

  validatePinCode(pincode: string){
    const url = `${this.apiUrl}/${pincode}`;
    return this.http.get(url);
    
  }
  
  

}
