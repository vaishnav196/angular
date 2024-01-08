import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
userlogin(item:any){
  console.log(item)
}
fillname:any;
}
