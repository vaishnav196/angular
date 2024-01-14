import { FormControl } from "@angular/forms";

 export class CustomValidators {
    static NoSpace(control:FormControl){
        if(control.value!= null && control.value.indexOf(' ')!=-1){
            return {NoSpace:true}
        }
        return null
    }


    
 }