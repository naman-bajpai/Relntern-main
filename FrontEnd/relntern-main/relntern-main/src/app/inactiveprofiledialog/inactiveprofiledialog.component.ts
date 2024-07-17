import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-inactiveprofiledialog',
  templateUrl: './inactiveprofiledialog.component.html',
  styleUrls: ['./inactiveprofiledialog.component.css']
})
export class InactiveprofiledialogComponent {


  internProfile: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<InactiveprofiledialogComponent>) {
    this.internProfile = data;
  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
