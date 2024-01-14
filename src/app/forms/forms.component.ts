import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';
import { CustomValidators } from '../Validators/nospaceallowed.validators';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
// userlogin(item:any){
//   console.log(item)
// }
// fillname:any;

RForm: FormGroup;
ngOnInit(): void {
   this.RForm=new FormGroup({
    firstname:new FormControl(null,[Validators.required,CustomValidators.NoSpace]),
    lastname:new FormControl(null,[Validators.required,]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,]),
    gender:new FormControl(null),
    address:new FormGroup({
      add1:new FormControl(null),
      add2:new FormControl(null),
      city:new FormControl(null),
      state:new FormControl(null),
      pincode:new FormControl(null),
      country:new FormControl(null),
    }),
    // add1:new FormControl(null),
    // add2:new FormControl(null),
    // city:new FormControl(null),
    // state:new FormControl(null),
    // pincode:new FormControl(null),
    // country:new FormControl(null),
   
   })
}
onformsubmit(){
  console.log(this.RForm)
}

}
