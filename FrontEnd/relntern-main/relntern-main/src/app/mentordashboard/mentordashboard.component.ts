import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { InternprofileComponent } from '../internprofile/internprofile.component';
import { UpdateDialogBodyComponent } from '../update-dialog-body/update-dialog-body.component';


@Component({
  selector: 'app-mentordashboard',
  templateUrl: './mentordashboard.component.html',
  styleUrls: ['./mentordashboard.component.css']
})
export class MentordashboardComponent {
  userid: any;
  mentoremail11: any;
  mentorDetails: any;
  internDetails: any;
  isAdmin: boolean = false;
  isMentor: boolean = false;
  isintern: boolean = false;
  roledesc: any;

  constructor(private router: Router, private internService: InternService, private matDialog: MatDialog) { }


  ngOnInit(): void {
    this.getActiveInterns();
    this.roledesc=localStorage.getItem("role");
    // this.validaterole(this.roledesc);
  }
  reloadPage() {
    window.location.reload()
  }

  // validaterole(roledesc:any){
  //   if(roledesc=="admin"){
  //     this.isAdmin=true;
  //   }
  //   else if(roledesc=="mentor"){
  //     this.isMentor=true
  //   }
  //   else{
  //     this.isintern=true;
  //     }
  //   }

  openProfile(intern: any): void {
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: intern,
    });
  }


  deleteIntern(intern: any): void {
    this.matDialog.open(DeleteDialogComponent, {
      width: '500px',
      height: '140px',
      data: intern
    });
  }
  openDialog(intern: any): void {
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: intern,
    });
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
  openEdit(intern: any): void {
    console.log(intern);
    this.matDialog.open(UpdateDialogBodyComponent, {
      width: '800px',
      height: '700px',
      data: { intern }
    });
  }

  logout() {
    localStorage.removeItem('role')
    localStorage.clear();
    this.router.navigate([``]);
  }
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  gotopage(internsId: any): void {
    console.log(internsId);
    this.router.navigate(['view-task/', internsId]);
  }

}
