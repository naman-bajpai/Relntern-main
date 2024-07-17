import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inactive-delete',
  templateUrl: './inactive-delete.component.html',
  styleUrls: ['./inactive-delete.component.css']
})
export class InactiveDeleteComponent implements OnInit {
  internDetails: any;

  constructor(
    private dialogRef: MatDialogRef<InactiveDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Retrieve the internDetails before deleting
    this.internService.getInactiveInterns().subscribe(
      (resp) => {
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }

  public deleteInternById(interns: any) {
    this.internService.deleteInactiveIntern(this.data.id).subscribe(
      (resp) => {
        console.log(resp);
        // Update the internDetails after deleting
        this.internDetails = this.internDetails.filter((i: any) => i.id !== this.data.id);
        this.closeDialog();
        this.router.navigate(['/'], { skipLocationChange: true }).then(() => this.router.navigate(['/inactive']));
      },
      (err) => console.log(err)
    );
  }

  private closeDialog() {
    this.dialogRef.close();
  }
}
