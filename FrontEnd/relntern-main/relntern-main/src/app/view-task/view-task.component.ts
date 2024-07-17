import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InternprofileComponent } from '../internprofile/internprofile.component';
import { Intern } from 'src/models/intern.mode';
import { TaskdeleteComponent } from '../taskdelete/taskdelete.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements AfterViewInit{
    internDetails !: any;
    taskdetails: any;
   internId: any;


    constructor(private router: Router, private internService: InternService, private matDialog: MatDialog, private routes : ActivatedRoute ) { }

    ngOnInit(): void {
      // this.getInterns();
      //this.getInternById();
      this.internId = this.routes.snapshot.paramMap.get("internId");
      console.log(this.internId)
      this.internService.getInternById(this.internId).subscribe(data=>
       this.internDetails = data
        )
      console.log( this.internDetails);

      this.getTaskById();
      this.roledesc=localStorage.getItem("role");
      this.validaterole(this.roledesc);
      this.getInternDetails();
    }

    ngAfterViewInit(): void {
      console.log(this.internDetails);

    }
    isAdmin: boolean=false;
    isMentor: boolean=false;
    isintern: boolean=false;
    roledesc: any;

  getInternDetails() {
    this.internService.dataSource.subscribe(data => {
      this.internDetails = data as any;
      console.log(data);
      console.log(this.internDetails);
    });
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

    // getInterns(): void {
    //   this.internService.getInterns().subscribe(
    //     (resp) => {
    //       console.log(resp);
    //       this.internDetails = resp;
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }

    getTaskById(): void{
      this.internService.getTaskById(this.internId).subscribe(
        (resp) => {
          console.log(resp);
          this.taskdetails = resp;
        },
        (err) => {
          console.log(err);
        }
      );
    }

    openDialog(intern: any): void {
      this.matDialog.open(InternprofileComponent, {
        width: '600px',
        height: '600px',
        data: intern,
      });
    }
    openTaskDetete(Tasks :any): void {
      console.log(Tasks);

      this.matDialog.open(TaskdeleteComponent, {
        width: '500px',
        height: '140px',
        data: Tasks
      });
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


    goToPage(pageName: string): void {
      this.router.navigate([pageName]);
    }
    gotopage( internsId : any): void {
      console.log(internsId);
      this.router.navigate(['add-task/',internsId]);
}
}
