import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskdelete',
  templateUrl: './taskdelete.component.html',
  styleUrls: ['./taskdelete.component.css']
})
export class TaskdeleteComponent {
  taskDetails: any;


  constructor(
    private dialogRef: MatDialogRef<TaskdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Retrieve the mentorDetails before deleting
    console.log(this.data);

    this.internService.getTask().subscribe(
      (resp) => {
        this.taskDetails = resp;
      },
      (err) => console.log(err)
    );
  }

  public deleteTaskById(){
    this.internService.deleteTask(this.data).subscribe(
      (resp) => {
        console.log(resp);
        this.closeDialog();
        this.router.navigate(['/'], { skipLocationChange: true }).then(() => this.router.navigate(['/list']));
      },
      (err) => console.log(err)
    );
  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
