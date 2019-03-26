import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private httpcli:HttpClient) { }
  registerAjax(data){
    return  this.httpcli.post('http://localhost/angular_logic_file/registerPage.php',data).pipe(map((res)=>{
       return res;
     }));
   }
}
