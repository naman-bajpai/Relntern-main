import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { Intern } from 'src/models/intern.mode';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  test : any;
  internDetails: any;
  rpwd: any;
  repeatPass: string | undefined;
  passwordMismatch = false;
  passw: any

//   passcheck() {
//   if(this.passw !== this.rpwd) {
//     this.passwordMismatch = true;
    
//     return;
//   }
// }

  constructor(private router: Router ,private fb: FormBuilder, private internService: InternService,private http: HttpClient, private authService : AuthService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getInterns();
  }

  myForm = this.fb.group({
    email: new FormControl('',[Validators.required,Validators.email]),  
    password :new FormControl('',[Validators.required]),
    rpwd: new FormControl("",[Validators.required])
  });

  get email(): FormControl{
    return this.myForm.get("email") as FormControl;
  }

  get password(): FormControl{
    return this.myForm.get("password") as FormControl;
  } 

  getInterns(): void {
    this.internService.getInterns().subscribe(
      (resp) => {
        // console.log(resp);
        this.internDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  alreadyExistToastr(){
    this.toastr.warning("login to continue ","User already exists",{
      timeOut:3000
    } )
  }
  errorToastr(){
    this.toastr.error("Contact the admin/mentor", "Error registering",{
      timeOut: 3000
    })
  }
  successToastr(){
    this.toastr.success("Registered Successfully", "Intern" ,{
        timeOut: 3000
      })
  }

  onSubmit() {
    // if(this.password.value == this.rpwd.value){
    //   // console.log("Submited");
    //   this.repeatPass='none'
    //   // console.log(this.registerForm.value);
    //   // this.registerForm.reset();
    // }else{
    //   this.repeatPass= 'inline'
    // }
    // this.passcheck();

    // this.showToastr();
    console.log(this.email);
    if (this.myForm.valid) {
    
      const formData = this.myForm.value;
      console.log(formData);
      this.authService.postregisterIntern(this.myForm.value).subscribe((resp:any)=>{
        if(resp.result=="User already exists"){
          this.alreadyExistToastr();
          this.router.navigate(['/login']);
        }
        if(resp.result=="User  saved Successfully"){
          this.successToastr();
        }
        if(resp.result=="Some error occured"){
          this.errorToastr();
        }
        console.log('User registered successfully', resp);
          this.myForm.reset();
          // this.router.navigate(['/login']);
          
      })

      // this.authService.postregisterIntern(this.myForm.value).subscribe((resp: any)=>{
      //   console.log('User registered successfully', resp);
      //     this.myForm.reset();
      //     this.router.navigate(['/login']);
      // },error =>{
      //   console.error('Error registering user', error);
      // })
      // this.http.post('http://localhost:8081/user/signupIntern', formData)
      //   .subscribe(response => {
      //     console.log('User registered successfully', response);
      //     this.myForm.reset();
      //     this.router.navigate(['/login']);

      //   }, error => {
      //     console.error('Error registering user', error);
      //   });
    } else {
      // Handle form validation errors
      console.log('Registration invalid');
    }
  }

  // onSubmit() {
  //   // this.test = this.myForm.get('email')?.value;
  //   // // console.log('Input Value:', this.test);
  //   // this.internDetails.forEach((element: any) => {
  //   //   if(this.test==element.email){  
  //   //     console.log(this.test);
  //   //   }
  //   //   console.log(element.email);  
  //   // });
  // }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }


}
function showtoastr() {
  throw new Error('Function not implemented.');
}

