import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { InternprofileComponent } from '../internprofile/internprofile.component';

@Component({
  selector: 'app-interndashboard',
  templateUrl: './interndashboard.component.html',
  styleUrls: ['./interndashboard.component.css']
})
export class InterndashboardComponent implements OnInit {
  internDetails: any;
  userid: any;
  taskdetails: any;
  internId: any;
  roledes: any;

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private internService: InternService
  ) {}

  ngOnInit(): void {
    this.roledes = localStorage.getItem('role');
    const retrievedUserId = localStorage.getItem('userId');
    if (retrievedUserId !== null) {
      this.userid = parseInt(retrievedUserId, 10);
      this.internByUserId();
    } else {
      console.error('User ID does not exist in localStorage.');
    }
  }

  internByUserId(): void {
    if (this.userid !== undefined) {
      this.internService.getInternByUserId(this.userid).subscribe(
        (resp) => {
          this.internDetails = resp;
          this.internId = this.internDetails.id;
          this.getTaskById();
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error('User ID is undefined.');
    }
  }

  getTaskById(): void {
    this.internService.getTaskById(this.internId).subscribe(
      (resp) => {
        this.taskdetails = resp;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  openProfile(internDetails: any): void {
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: internDetails,
    });
  }

  openTaskStatus(singletask: any): void {
    this.matDialog.open(TaskStatusComponent, {
      width: '600px',
      height: '600px',
      data: singletask,
    });
  }

  logout(): void {
    localStorage.removeItem('role');
    this.router.navigate([``]);
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
