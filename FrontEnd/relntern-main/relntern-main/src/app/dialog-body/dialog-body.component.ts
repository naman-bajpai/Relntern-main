import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  internDetails: any;

  constructor(
    private dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Retrieve the internDetails before deleting
    this.moveToInactive;
    console.log(this.data);
    this.internService.getInterns().subscribe(
      (resp) => {
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }
  moveToInactive() {
    this.internService.moveToInactive(this.data).subscribe(
      () => {
        console.log('Intern moved to inactive interns successfully.');
        // this.internDetails = this.internDetails.filter((item: any) => item.id !== intern.id);
        this.closeDialog();
        this.router.navigate(['/'], { skipLocationChange: true }).then(() => this.router.navigate(['/list']));
      },
      (error) => {
        console.log('Error moving intern to inactive interns:', error);
      }
    );
  }

  deleteIntern(intern: any) {
    this.internService.deleteIntern(this.data.id).subscribe(
      (resp) => {
        console.log(resp);
        // Update the internDetails after deleting
        this.internDetails = this.internDetails.filter((i: any) => i.id !== intern.id);
        this.closeDialog();
        this.router.navigate(['/'], {skipLocationChange: true}).then(() => this.router.navigate(['/list']));
      },
      (err) => console.log(err)
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
