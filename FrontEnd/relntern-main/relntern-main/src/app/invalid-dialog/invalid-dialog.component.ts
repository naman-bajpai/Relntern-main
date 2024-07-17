import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invalid-dialog',
  templateUrl: './invalid-dialog.component.html',
  styleUrls: ['./invalid-dialog.component.css']
})
export class InvalidDialogComponent {
  constructor(private dialogRef: MatDialogRef<InvalidDialogComponent>){

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
} 
