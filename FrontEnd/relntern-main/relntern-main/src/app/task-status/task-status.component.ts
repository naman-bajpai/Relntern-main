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
    alert("hello");
    // You can perform any additional actions here if needed
  }

  // $("#actualend").change(function () {
  //   var startDate = document.getElementById("actualstart").value;
  //   var endDate = document.getElementById("actualend").value;

  //   if((Date.parse(startDate) >= Date.parse(endDate))) {
  //     alert("End date should be greater than Start date");
  //     document.getElementById("actualend").value="";
  //   }
  // })
  setMinEndDate(): void {
    const startDateValue = this.taskStatusForm.get('actualstart')?.value;
    this.taskStatusForm.get('actualend')?.patchValue(this.startDateValue);
  }

  // startDateFilter = (date: Date | null): boolean => {
  //   const startDate = this.taskStatusForm.get('actualstart')?.value;
  //   return startDate ? date && date >= startDate : true;
  // };

  // startDateFilter = (date: Date): boolean => {
  //   const startDate = this.taskStatusForm.get('actualstart')?.value as Date | null;
  //   return this.isStatusCompleted() ? date && date >= startDate! : true;
  // };

  // endDateFilter = (date: Date): boolean => {
  //   const endDate = this.taskStatusForm.get('actualend')?.value as Date | null;
  //   return this.isStatusCompleted() ? date && date >= endDate! : true;
  // };
  
  // endDateValidator(control: any): { [key: string]: boolean } | null {
  //   const startDate = this.taskStatusForm.get('actualstart')?.value;
  //   const endDate = control.value;

  //   if (startDate && endDate && startDate > endDate) {
  //     return { 'endDateBeforeStartDate': true };
  //   }

  //   return null;
  // }

  // update(){
  //   const statusString:any=(this.taskStatusForm.get("status")?.value)?.toString()
  //   this.taskStatusForm.get("status")?.setValue(statusString);
  //   this.internService.updateTask(this.taskDetails.id,this.taskStatusForm).subscribe((resp) => {
  //     console.log('Update Response:', resp);

      
  //   },(error) => {
  //     console.error('Error updating task:', error);
  //   })
  // }

  update() {
    const formData = this.taskStatusForm.value;  // Extract plain object from form
    const statusString: any = formData.status?.toString();
    formData.status = statusString;
    // this.changeStatus(statusString);
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
