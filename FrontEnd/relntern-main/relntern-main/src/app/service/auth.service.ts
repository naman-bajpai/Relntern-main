import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url="http://localhost:8081/user"
 
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:3000/interns');
  }
  postUserData(userJson:any) {
    return this.http.post<User>(this.base_url+"/validates",userJson);
   }
   getUserData():Observable<User[]> {
    return this.http.get<User[]>(`${this.base_url}`);
   }
   postregisterIntern(registerData : any){
    return this.http.post(this.base_url+"/signupIntern" , registerData);
   }
   
  //  postUserData():Observable<User[]> {s
  //   return this.http.post<User[]>(`${this.base_url}`);
  //  }
}
