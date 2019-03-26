import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../../app/all-services.service';

@Component({
  selector: 'app1-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpCli:AllServicesService) { }

  ngOnInit() {
  }
  regName = {
    fullname: "",
    email: "",
    mobile: "8310106918",
    password: "",
    //cpassword:''
  };

  register(data){
    this.httpCli.registerAjax(data).subscribe((reponseResult)=>{
      console.log(reponseResult);
    })
  }

}
