import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentordelete',
  templateUrl: './mentordelete.component.html',
  styleUrls: ['./mentordelete.component.css']
})
export class MentordeleteComponent {
  mentorDetails: any;

  constructor(
    private dialogRef: MatDialogRef<MentordeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Retrieve the mentorDetails before deleting
    console.log(this.data);
    
    this.internService.getMentor().subscribe(
      (resp) => {
        this.mentorDetails = resp;
      },
      (err) => console.log(err)
    );
  }

  public deleteMentorById(){
    this.internService.deleteMentor(this.data).subscribe(
      (resp) => {
        console.log(resp);
        // Update the mentorDetails after deleting
        // this.mentorDetails = this.mentorDetails.filter((i: any) => i.mentorid !== this.data.mentorid);
        this.closeDialog();
        this.router.navigate(['/'], { skipLocationChange: true }).then(() => this.router.navigate(['/mentorlist']));
      },
      (err) => console.log(err)
    );
  }

  public closeDialog() {
    this.dialogRef.close();
  } 

}
