import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  internDetails: any;

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Retrieve the internDetails before deleting
    this.internService.getInterns().subscribe(
      (resp) => {
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }

  deleteIntern(intern: any) {
    this.internService.deleteIntern(this.data.id).subscribe(
      (resp) => {
        console.log(resp);
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