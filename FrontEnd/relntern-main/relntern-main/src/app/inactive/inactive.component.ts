import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { InternService } from '../intern.service';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InactiveDeleteComponent } from '../inactive-delete/inactive-delete.component';
import { InactiveprofiledialogComponent } from '../inactiveprofiledialog/inactiveprofiledialog.component';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  inactiveInternDetails: any;
    constructor(private router: Router, private internService: InternService , private matDialog : MatDialog) { 

    }

    ngOnInit(): void {
      this.getInactiveInterns();
      this.roledesc=localStorage.getItem("role");
      this.validaterole(this.roledesc);
    } 


    getInactiveInterns(): void {
      this.internService.getInActiveInterns().subscribe(
        (resp) => {
          console.log(resp);
          this.inactiveInternDetails = resp;
        },
        (err) => {
          console.log(err);
        }
      );
    }
    goToPage(pageName: string): void {
      this.router.navigate([pageName]);
    }

    openInactiveDialog(intern: any): void {
      this.matDialog.open(InactiveDeleteComponent, {
        width: '500px',
        height: '140px',
        data: intern
      });
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
    openInactiveProfile(intern: any): void {
      this.matDialog.open(InactiveprofiledialogComponent, {
        width: '600px',
        height: '600px',
        data: intern,
       } );
    }
}
