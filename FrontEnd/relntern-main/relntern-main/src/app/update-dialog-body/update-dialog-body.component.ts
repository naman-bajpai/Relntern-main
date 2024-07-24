import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-dialog-body',
  templateUrl: './update-dialog-body.component.html',
  styleUrls: ['./update-dialog-body.component.css']
})
export class UpdateDialogBodyComponent {
  // internUpdate: any;
  mentors: any;
  matDialog: any;
  internDetails: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { intern: any }
    , private internService: InternService, private router: Router,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    // this.updateIntern();
  }

  updateIntern(): void {
    this.internService.updateIntern(this.data.intern).subscribe(
      (resp) => {
        console.log(resp);
        this.successToastr();
        this.closeDialog();
      },
      (err) => { console.log(err); }
    );
  }

  getMentors(): void {
    this.internService.getMentor().subscribe(
      (resp) => { // Assuming the response is an array of Mentor objects
        console.log(resp);
        this.mentors = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  deleteIntern(interns: { id: any; }) {
    this.internService.deleteIntern(interns.id).subscribe(
      (resp) => {
        console.log(resp);
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }
  // openEdit(intern: any): void {
  //   console.log(intern);
  //   this.matDialog.open(UpdateDialogBodyComponent, {
  //     width: '800px',
  //     height: '700px',
  //     data: { intern }
  //   });
  // }
  
  moveToInactive(id: any) {
    this.internService.moveToInactive(id).subscribe(
      () => {
        console.log('success');
        // this.router.navigate(['inactive']);
        // this.router.navigate(['/list'])
        
        // Remove the intern from the internDetails array
        this.internDetails = this.internDetails.filter((item: any) => item.id !== id);
        
        // this.closeDialog();
      },
      (error) => {
        console.log('Error moving intern to inactive interns:', error);
      }
    );
  }

  openDialog(intern: any): void {
    this.matDialog.open(DialogBodyComponent, {
      width: '500px',
      height: '140px',
      data: intern
    });
  }
  successToastr(){
    this.toastr.success("Updated Successfully", "Intern Details" ,{
        timeOut: 4000
      })
  }
  

  // closeDialog() {
  //   this.matDialog.closeAll();
  // }

  

  closeDialog(): void {
    this.dialogRef.close();
  }
}
