import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import  { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-internsuccess',
  templateUrl: './internsuccess.component.html',
  styleUrls: ['./internsuccess.component.css']
})
export class InternsuccessComponent {
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;
  title = 'angular-dialog';
  constructor(private router: Router , private matDialog : MatDialog ) {}
  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
  ngOnInIt(): void{
    this.roledesc=localStorage.getItem("role");
    this.validaterole(this.roledesc);
  }

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
}
