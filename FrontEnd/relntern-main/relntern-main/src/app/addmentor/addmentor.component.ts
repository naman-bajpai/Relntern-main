import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.css']
})
export class AddmentorComponent {
  mentorDetails: any;
registerForm: any;
  
  
  constructor(private router:Router, private internService : InternService) { }
  

  ngOnInit(): void {
    this.roledesc=localStorage.getItem("role");
    this.validaterole(this.roledesc);
  }
  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.internService.registerMentor(registerForm.value).subscribe(
        (resp: any) => {
          console.log(resp);
          registerForm.resetForm();
          this.router.navigate(['/mentorlist']);
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;

  
  
  validaterole(roledesc:any){
    if(roledesc=="admin"){
      this.isAdmin=true;
    }
    else if(roledesc=="mentor"){
      this.isMentor=true
    }
    else{
      this.isintern=true;
    }
    }
    navigateTo():void{//this is to navigate to particular dashboard according to their role
      if(this.isAdmin){
      this.router.navigate([`dashboard`]);
      }
      else if(this.isMentor){
        this.router.navigate([`mentordashboard`]);
      }
      else if(this.isintern){
        this.router.navigate([`interndashboard`]);
      }
      else{
      }
    }
    logout(){
      localStorage.removeItem('role')
      this.router.navigate([``]);
    }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
