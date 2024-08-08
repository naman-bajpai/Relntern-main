import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit{

  taskDetails : any;
  taskStatus: string[] = ['In Progress', 'Completed'];
  startDateValue: any;
  // disableDateFields = false;
  // taskStatusForm: FormGroup

  constructor(
    private dialogRef: MatDialogRef<TaskStatusComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
    private internService: InternService, private router: Router,private fb: FormBuilder,private toastr:ToastrService
  ) {
    console.log(data);
    this.taskDetails = data;
   }

  ngOnInit() {
  }

  taskStatusForm=this.fb.group({
    status:['', Validators.required],
    actualstart:['', Validators.required],
    actualend:['',Validators.required],
  })

  isStatusCompleted(): boolean {
    return this.taskStatusForm.get('status')?.value === 'Completed';
  }
  onActualEndChange(event: Event) {
    // You can perform any additional actions here if needed
  }

  setMinEndDate(): void {
    const startDateValue = this.taskStatusForm.get('actualstart')?.value;
    this.taskStatusForm.get('actualend')?.patchValue(this.startDateValue);
  }

  update() {
    const formData = this.taskStatusForm.value;  
    const statusString: any = formData.status?.toString();
    formData.status = statusString;

    this.successToastr();
    this.internService.updateTask(this.taskDetails.id, formData).subscribe(
      (resp) => {
        console.log('Update Response:', resp);
        
      
      }
    );
  }
  

  successToastr(){
    this.toastr.success("Updated Successfully", "Task" ,{
        timeOut: 4000
      })
  }


  public closeDialog() {
    this.dialogRef.close();
  }
  

}
