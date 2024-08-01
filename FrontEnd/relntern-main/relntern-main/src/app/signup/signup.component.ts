import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  internDetails: any;
  passwordMismatch = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private internService: InternService,
    private http: HttpClient,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getInterns();
  }

  myForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rpwd: new FormControl('', [Validators.required])
  });

  get email(): FormControl {
    return this.myForm.get("email") as FormControl;
  }

  get password(): FormControl {
    return this.myForm.get("password") as FormControl;
  }

  get rpwd(): FormControl {
    return this.myForm.get("rpwd") as FormControl;
  }

  getInterns(): void {
    this.internService.getInterns().subscribe(
      (resp) => {
        this.internDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  alreadyExistToastr() {
    this.toastr.warning("Login to continue", "User already exists", {
      timeOut: 3000
    });
  }

  errorToastr() {
    this.toastr.error("Contact the admin/mentor", "Error registering", {
      timeOut: 3000
    });
  }

  successToastr() {
    this.toastr.success("Registered Successfully", "Intern", {
      timeOut: 3000
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.password.value !== this.rpwd.value) {
        this.passwordMismatch = true;
        return;
      } else {
        this.passwordMismatch = false;
      }

      this.authService.postregisterIntern(this.myForm.value).subscribe(
        (resp: any) => {
          if (resp.result === "User already exists") {
            this.alreadyExistToastr();
            this.router.navigate(['/login']);
          } else if (resp.result === "User saved Successfully") {
            this.successToastr();
          } else if (resp.result === "Some error occurred") {
            this.errorToastr();
          }

          this.myForm.reset();
        },
        (error) => {
          console.error('Error registering user', error);
          this.errorToastr();
        }
      );
    } else {
      console.log('Registration invalid');
    }
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}