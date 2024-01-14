import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  //  constructor() { }


  private apiUrl = `https://api.postalpincode.in/pincode`;
 

  constructor(private http: HttpClient) {
   
  }

  validatePinCode(pincode: string){
    const url = `${this.apiUrl}/${pincode}`;
    return this.http.get(url);
    
  }
  
  // fetchBranchName(pincode: string) {
  //   const apiUrl = `https://api.example.com/pincode/${pincode}`;
  //   this.http.get(apiUrl).subscribe(
  //     (response: any) => {
  //       const branchName = response.branchName; // Adjust based on the actual API response
  //       console.log(`Branch Name: ${branchName}`);
  //       // Update UI with branch name
  //     },
  //     (error) => {
  //       console.error(error);
  //       // Handle errors
  //     }
  //   );
  // }


}
