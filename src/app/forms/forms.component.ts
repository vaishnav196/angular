import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';

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
    firstname:new FormControl(null),
    lastname:new FormControl(null),
    email:new FormControl(null),
    phone:new FormControl(null),
    add1:new FormControl(null),
    add2:new FormControl(null),
    city:new FormControl(null),
    state:new FormControl(null),
    pincode:new FormControl(null),
    country:new FormControl(null),
   
   })
}

}
