import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  registerForm: any;
  internId:any;
  // mentor_id : any;
  mentoruserid: any;
  mentor_id: any;

  constructor(private internService: InternService, private router: Router,
    private formBuilder: FormBuilder,private routes : ActivatedRoute)
    {
      this.registerForm = this.formBuilder.group({
        task: ['', Validators.required],
        description: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
        // status: new FormControl('To-Do')
        // mentor_id: []
      });
    }

    ngOnInit(): void {
      this.internId = this.routes.snapshot.paramMap.get("internId");
      // console.log(this.internId)

      this.roledesc=localStorage.getItem("role");
      this.validaterole(this.roledesc);

      const retrievedInteger:string|null = localStorage.getItem('userId');
      if (retrievedInteger !== null) {
       this.mentoruserid = parseInt(retrievedInteger, 10);
      // console.log(this.mentoruserid);
      this.getmentordetails();
      } else {
      console.error('Does not exist in localStorage.');
      }
    }

    getmentordetails(){
      this.internService.getMentorByMentoruserid(this.mentoruserid).subscribe((resp: any)=>{
        console.log(resp);
        this.mentor_id = resp.mentorid;

      })
    }


  register(registerForm: NgForm) {
    // console.log(this.mentoruserid);
    console.log(this.mentor_id);
    
    
    if (registerForm.valid) {
      let taskDetail = registerForm.value
      taskDetail['mentor_id'] = this.mentor_id
      taskDetail['status'] = "To-Do"

      this.internService.registerTask(taskDetail,this.internId).subscribe(
        (resp: any) => {
          console.log(resp);
          registerForm.resetForm();
          this.router.navigate(['/list']);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    else {
      // Handle form validation errors
      console.log('Form is invalid');
      alert("Invalid Input");
    }
  }


  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;

  validaterole(roledesc:any){
    if(roledesc=="admin"){
      this.isAdmin=true;
    }
    else if(roledesc=="mentor"){
      this.isMentor=true
    }
    else{
      this.isintern=true;
    }
    }

  navigateTo():void{
      if(this.isAdmin){
      this.router.navigate([`dashboard`]);
      }
      else if(this.isMentor){
        this.router.navigate([`mentordashboard`]);
      }
      else if(this.isintern){
        this.router.navigate([`interndashboard`]);
      }
      else{
      }
    }
    logout(){
      localStorage.removeItem('role')
      this.router.navigate([``]);
}
  cancel() {
    this.router.navigate(['/list']);
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
