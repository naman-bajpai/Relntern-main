import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { UpdateDialogBodyComponent } from '../update-dialog-body/update-dialog-body.component';
import { InternprofileComponent } from '../internprofile/internprofile.component';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  internDetails: any;
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;

  constructor(private router: Router, private internService: InternService, private matDialog: MatDialog) {}

  isCurrentRoute(route: string): boolean {
    // console.log(this.router.url);
    return (this.router.url==route);
  }

  ngOnInit(): void {
    this.getActiveInterns();
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

    getActiveInterns(): void {
      this.internService.getActiveInterns().subscribe(
        (resp) => {
          console.log(resp);
          this.internDetails = resp;
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


  goToPage(page: string): void {
    this.router.navigate([page]);
  }
}