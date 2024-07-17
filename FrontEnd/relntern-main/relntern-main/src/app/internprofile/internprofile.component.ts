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
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;
  document : any;
  internid : any;
  dd : any;
  mm : any;
  yyyy : any;
  time: any;
  today: any;
  dateformat: any;
  uploadedFiles: any;

  ngOnInit(): void {
    // console.log(this.router.url);
    this.roledesc=localStorage.getItem("role");
    // this.userid=localStorage.getItem("userId");
    this.validaterole(this.roledesc);
    this.todaysDate();
    this.getDocuments();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<InternprofileComponent>,private internService: InternService,private fb: FormBuilder,private toastr:ToastrService,private router: Router) {
    console.log(data);
    
    this.internProfile = data;
  }
  todaysDate(){
  let today = new Date();
  this.time=today.toLocaleTimeString();

  console.log(this.time);
  this.dd= today.getDate();
  this.mm= today.getMonth()+1;
  const yyyy = today.getFullYear();
  if(this.dd<10){
    this.dd=`0${this.dd}`;
  }
  if(this.mm<10){
    this.mm=`0${this.mm}`;
  }
  this.today=`${this.dd}-${this.mm}-${yyyy}`
  this.dateformat=`${this.dd}${this.mm}${yyyy}`
  console.log(this.today);    {/*05-02-2024 -- Note for further interns(by Sarang)*/}
  console.log(this.dateformat);   {/*05022024*/}
  }

  // getId(){
  // document.getElementById('file').addEventListener('change', getFileName);
  // }
  // const getFileName = (event: { target: { files: any; }; }) => {
  // const files = event. target. files;
  // const fileName = files[0]. name;
  // console. log("file name: ", fileName);
  // }
  // document.getElementById('file').onchange = function () {
  //   alert('Selected file: ' + this.value);
  // };

  // getUploadedFileName(){
    
  // }
  uploadDocument=this.fb.group({
    inputfile:['', Validators.required]
  })
  get inputfile(): FormControl {
    return this.uploadDocument.get("inputfile") as FormControl;
  }
  upload(){
    // console.log(document);
    if (this.uploadDocument.valid) {
      // console.log(this.uploadDocument.value);
      let documentJson: any={
      internid:this.internProfile.id,
      date:this.today,
      docname: `${this.internProfile.id}_${this.dateformat}_${this.time}`,
    }
    console.log(documentJson);
    
    this.internService.uploaddocument(documentJson).subscribe((data)=> {
      console.log(data);
      
    })
  }else{
    console.log('Upload invalid');
  }
  }

  getDocuments(){
    this.internService.getDocumentByInternId(this.internProfile.id).subscribe((data)=> {
      console.log(data);
      this.uploadedFiles = data;
    })
  }

  closeInternship(id:any){
    this.internService.closeInternship(id).subscribe((data)=> {
      console.log("Internship Closed");
      // this.successToastr();
      // this.router.navigate(['/list']);
    },(error)=>{
      // console.log(error);
      this.successToastr();
      this.router.navigate(['list']);
    });
  }
  successToastr(){
    this.toastr.success("Mail Triggered", "Intern Closed" ,{
        timeOut: 3000
      })
  }

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
    

  
  public closeDialog() {
    this.dialogRef.close();
  }
}

