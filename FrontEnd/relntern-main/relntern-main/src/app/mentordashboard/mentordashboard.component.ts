import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private router: Router, private internservice:InternService,private matDialog: MatDialog) { }


  ngOnInit(): void{
    console.log(this.router.url);
    const retrievedInteger:string|null = localStorage.getItem('userId');
    if (retrievedInteger !== null) {
      this.userid = parseInt(retrievedInteger, 10);
     console.log(this.userid);
     this.mentorByUserId();
   } else {
     console.error('Does not exist in localStorage.');
   }
  }
  reloadPage() {
    window.location.reload()
  }

  mentorByUserId(){
  this.internservice.getMentorByMentoruserid(this.userid).subscribe((data) => {
    console.log(data);
    this.mentorDetails=data;
    this.mentoremail11=data.mentoremail;
    console.log(this.mentoremail11);
    
    this.ActiveInternsByMentor();
  })
  }

  ActiveInternsByMentor(): void{
    this.internservice.getActiveByMentor(this.mentoremail11).subscribe((data) => {
      console.log(data);
      this.internDetails=data;
    })
  }
  openEdit(intern: any): void {
    console.log(intern);
    this.matDialog.open(UpdateDialogBodyComponent, {
      width: '800px',
      height: '700px',
      data: { intern }
    });
  }

  logout(){
    localStorage.removeItem('role')
    localStorage.clear();
    this.router.navigate([``]);
}
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  gotopage( internsId : any): void {
    console.log(internsId);
    this.router.navigate(['view-task/',internsId]);
  }

}
