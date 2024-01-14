import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';
import { CustomValidators } from '../Validators/nospaceallowed.validators';
import { PincodeService } from '../services/pincode.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  // userlogin(item:any){
  //   console.log(item)
  // }
  // fillname:any;

  branch: any = {};
  constructor(private Pin: PincodeService, private http: HttpClient) {}
  RForm: FormGroup;
  ngOnInit(): void {
    this.RForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        CustomValidators.NoSpace,
      ]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      gender: new FormControl(null),
      address: new FormGroup({
        add1: new FormControl(null),
        add2: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        pincode: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^\d{6}$/),
        ]),
        country: new FormControl(null),
      }),
      // add1:new FormControl(null),
      // add2:new FormControl(null),
      // city:new FormControl(null),
      // state:new FormControl(null),
      // pincode:new FormControl(null),
      // country:new FormControl(null),
    });
  }

  onformsubmit() {
    // console.log(this.RForm)
    const pincode = this.RForm.get('address.pincode').value;

    this.Pin.validatePinCode(pincode).subscribe((isValid) => {
      // if (isValid) {
      //   this.RForm.get('address.pincode').setErrors({ invalidPincode: true });
      //   console.log('pin code is invalid');
      // } else {
      //   // Pin code is valid, you can proceed with your logic here
      //   console.log('Pin code is valid');
      //   console.log(isValid);
      // }

      this.branch=isValid
      console.log(this.branch)
    });
  }
 
}
