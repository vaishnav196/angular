import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newtask';
  name='vaishnav';
  surname='Ghangale';
  show=true;
  data='this is uppercase pipe';
  color="green"
  todaysdate=Date();
  list=['anil','shubham','riya','ram','shreya']
user={
  name:'vaishnav',
  job:'intern'
}

  fullname='vaishnav pradeep ghangale'

  showalert(){
    window.alert("thanks for subscribing")
  }

  toggle:boolean=true
  gettoggle(){
this.toggle=! this.toggle
  }
}
