import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentordeleteComponent } from '../mentordelete/mentordelete.component';

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent {
  mentorDetails: any;
  constructor(private router: Router , private internService: InternService, private matDialog: MatDialog) { }

  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;
  ngOnInit(): void {
    this.getMentor();
    this.roledesc=localStorage.getItem("role");
    this.validaterole(this.roledesc);
  }
  
  getMentor(): void {
    this.internService.getMentor().subscribe(
      (resp) => {
        console.log(resp);
        this.mentorDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout(){
    localStorage.removeItem('role')
    this.router.navigate([``]);
  }
  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }

  openMentorDetete(mentor :any): void {
    // console.log(mentor);
    
    this.matDialog.open(MentordeleteComponent, {
      width: '500px',
      height: '140px',
      data: mentor
    });
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
}
