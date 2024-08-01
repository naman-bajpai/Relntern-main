import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user?: User;
  model: any;
  getData: boolean = true;
  username: any;
  password: any;
  role: any;
  userId: any;
  isAdmin: boolean = false;
  isMentor: boolean = false;
  isIntern: boolean = false;
  toastr: any;

  constructor(private authservice: AuthService, private router: Router) { }

  loginUser() {
    console.log(this.username, this.password);
    let userJson: any = {
      username: this.username,
      password: this.password
    }

    this.authservice.postUserData(userJson).subscribe(data => {


      let userId = data.id;

      if (data.role === "admin") {
        this.isAdmin = true;
        console.log("admin:" + this.isAdmin)
        localStorage.setItem('role', 'admin');
        this.goToPage('dashboard');
      }
      else if (data.role === "mentor") {
        this.isMentor = true;
        console.log("mentor:" + this.isMentor)
        console.log(data.id);
        localStorage.setItem('role', 'mentor');
        localStorage.setItem('userId', userId.toString());
        this.goToPage('mentordashboard');
        //  this.reloadPage();  
      }
      else if (data.role === "intern") {
        this.isIntern = true;
        // console.log(data.id);

        console.log("Intern:" + this.isIntern)
        localStorage.setItem('role', 'intern');
        localStorage.setItem('userId', userId.toString());
        this.goToPage('interndashboard');
      }
      else {
        this.toastr.error("password Incorrect")
        console.log("password Incorrect")
      }
    })
  }
  reloadPage() {
    window.location.reload()
  }
  ngOnInit() {
  }


  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}