import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule, FormsModule, NgForm, FormArray } from '@angular/forms';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { InvalidDialogComponent } from '../invalid-dialog/invalid-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  internDetails: any;
  internEmail: any;
  test: any;
  mentors: any;
  isAdmin: boolean = false;
  isMentor: boolean = false;
  isintern: boolean = false;
  roledesc: any;
  selectedMentor!: String;
  // mentors: any[] = [];
  //quarterarray:string[]=[];
   
  toppingList: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  show: boolean = false;



  ngOnInit(): void {
    this.getInterns();
    this.getMentors();
    this.roledesc = localStorage.getItem("role");
    this.validaterole(this.roledesc);
    this.registerForm.get('mentor')?.valueChanges.subscribe((value: any) => {
      this.selectedMentor = value;
    });
  }

  
  selectmentor(mentor: any) {
    // console.log(mentor.target.value);
    const selectedMentorName = this.registerForm.get('mentor')?.value;
    // this.mentors.filter(mentors => mentors.mentorname === selectedMentorName)
    const selectedMentor = this.mentors.find((mentors: any) => { return mentors.mentorname === selectedMentorName });
    console.log(selectedMentor);
    this.registerForm.get('mentoremail')?.setValue(selectedMentor.mentoremail);
    this.test = selectedMentor.mentoremail;

    //  console.log(this.test);

    // this.registerForm.get('mentor')
  }

  constructor(
    private internService: InternService,
    private router: Router,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) { }

  reset() {
    this.registerForm.reset();
  }

  togglePasswordVisibility(): void {
    this.show = !this.show;
  }
  registerForm = this.formBuilder.group({
    fullname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("",Validators.required),
    role: new FormControl('', [Validators.required]),
    association: new FormControl('', Validators.required),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    dob: new FormControl('', [Validators.required, this.dateOfBirthValidator]),
    location: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    reference: new FormControl('', Validators.required),

    gradyear: new FormControl('', Validators.required),
    uniname: new FormControl('', Validators.required),
    coursename: new FormControl('', Validators.required),
    semester: new FormControl('', Validators.required),
    specialization: new FormControl('', Validators.required),

    // linkedlink : new FormControl("",[Validators.required]),
    quarter: new FormControl('', [Validators.required]),
    quarterArray: new FormControl('', [Validators.required]),
    mentor: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    mentoremail: new FormControl(''),
    projectname: new FormControl('', Validators.required),
    // projectstatus: new FormControl('', [Validators.required,Validators.pattern("[0-9]*")]),
    startDate: new FormControl('', [Validators.required, this.startDateValidator]),
    endDate: new FormControl('', [Validators.required, this.endDateValidator]),
  }, { validators: this.dateRangeValidator });

  //   subscribeToMentorChanges() {  bard
  //   this.registerForm.get('mentor')?.valueChanges.subscribe((selectedMentor: any) => {
  //     const selectedMentorObject = this.mentors.find((mentor: { mentorname: string, email: string }) => mentor.mentorname === selectedMentor);

  //     this.registerForm.patchValue({
  //       mentoremail: selectedMentorObject ? selectedMentorObject.email : ''
  //     });
  //   });
  // }

  // subscribeToMentorChanges() {
  //   this.registerForm.get('mentor')?.valueChanges.subscribe((selectedMentor:any) => {
  //     // Find the mentor object based on the selected mentor name
  //     const selectedMentorObject = this.mentors.find((mentor: { mentorname: string, email: string }) => mentor.mentorname === selectedMentor);

  //     // Update the mentoremail control
  //     this.registerForm.patchValue({
  //       mentoremail: selectedMentorObject ? selectedMentorObject.email : ''
  //     });
  //   });
  // }

  dateOfBirthValidator(control: FormControl): { [key: string]: any } | null {
    const dob = new Date(control.value);
    const today = new Date();
    const minAge = 18;
    const maxAge = 100;

    if (isNaN(dob.getTime())) {
      return { 'invalidDate': true };
    }

    const age = today.getFullYear() - dob.getFullYear();

    if (age < minAge || age > maxAge) {
      return { 'invalidAge': true };
    }

    return null;
  }

  startDateValidator(control: FormControl): { [key: string]: any } | null {
    const startDate = new Date(control.value);
    const today = new Date();

    if (isNaN(startDate.getTime())) {
      return { 'invalidDate': true };
    }

    if (startDate < today) {
      return { 'pastDate': true };
    }

    return null;
  }


  endDateValidator(control: FormControl): { [key: string]: any } | null {
    const endDate = new Date(control.value);

    if (isNaN(endDate.getTime())) {
      return { 'invalidDate': true };
    }

    return null;
  }

  // Date Range Validator
  dateRangeValidator(group: FormGroup): { [key: string]: any } | null {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end <= start) {
        return { 'invalidDateRange': true };
      }
    }

    return null;
  }

  register() {

    console.log((this.registerForm.get("quarterArray")?.value)?.toString());
    console.log(this.selectedMentor);
    this.internEmail = this.registerForm.get("email")?.value

    // let quarterString= quarterarray.toString();
    // // quarterarray.forEach(element=> { 
    // //   quarterString=quarterString+ element;
    // // });

    // const quarterString:any= (this.registerForm.get("quarterArray")?.value)?.toString();
    // this.registerForm.get("quarterArray")?.setValue(quarterString)
    const quarterString: any = (this.registerForm.get("quarterArray")?.value)?.toString()
    // console.log((this.registerForm.get("quarterArray")?.value)?.toString());
    this.registerForm.get("quarter")?.setValue(quarterString);

    if (this.registerForm.valid) {
      this.internService.registerIntern(this.registerForm.value).subscribe(
        (resp: any) => {
          console.log('Successful API response:', resp);
          // this.sendmail();
          this.sendingEmailToastr();
          // this.registerForm.reset();
          this.router.navigate(['/list']);
        },
        (err: any) => {
          console.log('API Error:', err);
        }
      );
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }

  // sendmail(){    Implemented this in the backend registration
  //   console.log(this.internEmail);
  //   const structure = {
  //     subject: "Joining letter",
  //     message: "You are being added into the reIntern portal"
  //   };

  //   // Converting the structure object into the JSON format
  //   const structureJson = JSON.stringify(structure);
  //   this.internService.sendRegisterMail(this.internEmail,structureJson).subscribe((data) => {
  //     console.log('Successful API response:', data);
  //         this.router.navigate(['/list']);
  //       },
  //       (err: any) => {
  //         console.log('API Error:', err);
  //       })
  // }

  sendingEmailToastr() {
    this.toastr.success("Sending.....", "Generating email", {
      timeOut: 3000
    })
  }

  get fullname(): FormControl {
    return this.registerForm.get("fullname") as FormControl;
  }
  get email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }
  get role(): FormControl {
    return this.registerForm.get("role") as FormControl;
  }
  get association(): FormControl {
    return this.registerForm.get("association") as FormControl;
  }

  get phone(): FormControl {
    return this.registerForm.get("phone") as FormControl;
  }

  get dob(): FormControl {
    return this.registerForm.get("dob") as FormControl;
  }

  get location(): FormControl {
    return this.registerForm.get("location") as FormControl;
  }

  get reference(): FormControl {
    return this.registerForm.get("reference") as FormControl;
  }

  get gradyear(): FormControl {
    return this.registerForm.get("gradyear") as FormControl;
  }

  get uniname(): FormControl {
    return this.registerForm.get("uniname") as FormControl;
  }

  get coursename(): FormControl {
    return this.registerForm.get("coursename") as FormControl;
  }

  get semester(): FormControl {
    return this.registerForm.get("semester") as FormControl;
  }

  get specialization(): FormControl {
    return this.registerForm.get("specialization") as FormControl;
  }

  // get linkedlink(): FormControl {
  //   return this.registerForm.get("linkedlink") as FormControl;
  // }

  get quarter(): FormControl {
    return this.registerForm.get("quarter") as FormControl;
  }

  get mentor(): FormControl {
    return this.registerForm.get("mentor") as FormControl;
  }

  get mentoremail(): FormControl {
    return this.registerForm.get("mentoremail") as FormControl;
  }

  get projectname(): FormControl {
    return this.registerForm.get("projectname") as FormControl;
  }

  // get projectstatus(): FormControl {
  //   return this.registerForm.get("projectstatus") as FormControl;
  // }

  get startDate(): FormControl {
    return this.registerForm.get("startDate") as FormControl;
  }

  get endDate(): FormControl {
    return this.registerForm.get("endDate") as FormControl;
  }




  validaterole(roledesc: any) {
    if (roledesc == "admin") {
      this.isAdmin = true;
    }
    else if (roledesc == "mentor") {
      this.isMentor = true
    }
    else {
      this.isintern = true;
    }
  }
  logout() {
    localStorage.removeItem('role')
    this.router.navigate([``]);
  }
  getMentors(): void {
    this.internService.getMentor().subscribe(
      (resp) => { // Assuming the response is an array of Mentor objects
        console.log(resp);
        this.mentors = resp;
      },
      (err) => {
        console.log(err);
      }
    );
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

  // subscribeToMentorChanges() {
  //   this.registerForm.get('mentor').valueChanges.subscribe((selectedMentor: string) => {
  //     // Find the mentor object based on the selected mentor name
  //     const selectedMentorObject = this.mentors.find((mentor: { mentorname: string; }) => mentor.mentorname === selectedMentor);

  //     // Update the mentorEmail control
  //     this.registerForm.patchValue({
  //       mentoremail: selectedMentorObject ? selectedMentorObject.email : ''
  //     });
  //   });
  // }

  cancel() {
    this.router.navigate(['/home']);
  }
  navigateTo(): void {  //this is to navigate to particular dashboard according to their role
    if (this.isAdmin) {
      this.router.navigate([`dashboard`]);
    }
    else if (this.isMentor) {
      this.router.navigate([`mentordashboard`]);
    }
    else if (this.isintern) {
      this.router.navigate([`interndashboard`]);
    }
    else {
    }
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  
}
