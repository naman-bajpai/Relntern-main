import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internprofile',
  templateUrl: './internprofile.component.html',
  styleUrls: ['./internprofile.component.css'],
})
export class InternprofileComponent {
  internProfile: any;
  isAdmin: boolean = false;
  isMentor: boolean = false;
  isintern: boolean = false;
  roledesc: any;
  document: any;
  internid: any;
  dd: string = '';
  mm: string = '';
  yyyy: string = '';
  time: string = '';
  today: string = '';
  dateformat: string = '';
  uploadedFiles: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InternprofileComponent>,
    private internService: InternService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    console.log(data);
    this.internProfile = data;
  }

  ngOnInit(): void {
    this.roledesc = localStorage.getItem('role');
    this.validaterole(this.roledesc);
    this.todaysDate();
    this.getDocuments();
  }

  todaysDate(): void {
    const today = new Date();
    this.time = today.toLocaleTimeString();
    console.log(this.time);

    this.dd = String(today.getDate()).padStart(2, '0');
    this.mm = String(today.getMonth() + 1).padStart(2, '0');
    this.yyyy = String(today.getFullYear());

    this.today = `${this.dd}-${this.mm}-${this.yyyy}`;
    this.dateformat = `${this.dd}${this.mm}${this.yyyy}`;

    console.log(this.today); // 05-02-2024
    console.log(this.dateformat); // 05022024
  }

  uploadDocument: FormGroup = this.fb.group({
    inputfile: ['', Validators.required]
  });

  get inputfile(): FormControl {
    return this.uploadDocument.get('inputfile') as FormControl;
  }

  upload(): void {
    if (this.uploadDocument.valid) {
      const documentJson = {
        internid: this.internProfile.id,
        date: this.today,
        docname: `${this.internProfile.id}_${this.dateformat}_${this.time}`,
      };
      console.log(documentJson);

      this.sendDeactivate();

      this.internService.uploaddocument(documentJson).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.log('Upload invalid');
    }
  }

  sendDeactivate(): void {
    const mailStructure = {
      fullname: this.internProfile.fullname,
      email: this.internProfile.email,
      startdate: this.internProfile.startdate,
      enddate: this.internProfile.enddate,
      domainid: this.internProfile.domainid,
      projectname: this.internProfile.projectName,
      mentor: this.internProfile.mentor
    };

    this.internService.sendDeactivate(mailStructure).subscribe(
      (resp: any) => {
        console.log('Email sent successfully:', resp);
      },
      (err: any) => {
        console.error('Error sending email:', err);
      }
    );
  }

  getDocuments(): void {
    this.internService.getDocumentByInternId(this.internProfile.id).subscribe((data) => {
      console.log(data);
      this.uploadedFiles = data;
    });
  }

  closeInternship(id: any): void {
    this.internService.closeInternship(id).subscribe(
      (data) => {
        console.log('Internship Closed');
        this.successToastr();
        this.router.navigate(['list']);
      },
      (error) => {
        this.successToastr();
        this.router.navigate(['list']);
      }
    );
  }

  successToastr(): void {
    this.toastr.success('Mail Triggered', 'Intern Closed', {
      timeOut: 3000,
    });
  }

  validaterole(roledesc: any): void {
    if (roledesc === 'admin') {
      this.isAdmin = true;
    } else if (roledesc === 'mentor') {
      this.isMentor = true;
    } else {
      this.isintern = true;
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}