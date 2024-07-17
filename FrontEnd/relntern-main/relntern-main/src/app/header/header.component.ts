import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
import { InternprofileComponent } from '../internprofile/internprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:any;
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;
  userid: any;
  internDetails :any;

  constructor(private router:Router, private internService: InternService, private matDialog: MatDialog) { }
  ngOnInit(): void {
    console.log(this.router.url);
    this.roledesc=localStorage.getItem("role");
    this.userid=localStorage.getItem("userId");
    this.validaterole(this.roledesc);
  }
  openProfile(internDetails: any): void {  
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: internDetails,
    });
  }

  validaterole(roledesc:any){
    if(roledesc=="admin"){
      this.isAdmin=true;
      this.name="Admin";
    }
    else if(roledesc=="mentor"){
      this.isMentor=true
      this.name="yoyomentor";

    }
    else{
      this.isintern=true;
      this.internService.getInternByUserId(this.userid).subscribe((resp)=>{
      this.internDetails=resp
      this.name=resp.fullname;
      });
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
      // localStorage.removeItem('userId')
      // this.reloadPage();
      this.router.navigate([``]);
      
        
      
    }

    goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`]);
    }
    reloadPage() {
      window.location.reload()
    }

}


