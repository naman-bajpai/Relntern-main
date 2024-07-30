import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.css']
})
export class AddmentorComponent implements OnInit {
  mentorDetails: {
    mentorname?: string;
    mentoremail?: string;
    l1name?: string;
    l1email?: string;
    Role?: string;
    association?: string;
  } = {};
  roledesc: string | null = '';
  isAdmin: boolean = false;
  isMentor: boolean = false;
  isIntern: boolean = false;

  constructor(private router: Router, private internService: InternService) {}

  ngOnInit(): void {
    this.roledesc = localStorage.getItem('role');
    this.validateRole(this.roledesc);
  }

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.internService.registerMentor(this.mentorDetails).subscribe(
        (resp: any) => {
          console.log('Registration successful', resp);
          registerForm.resetForm();
          this.router.navigate(['/mentorlist']);
        },
        (err: any) => {
          console.error('Registration error', err);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  validateRole(roledesc: string | null) {
    switch (roledesc) {
      case 'admin':
        this.isAdmin = true;
        break;
      case 'mentor':
        this.isMentor = true;
        break;
      default:
        this.isIntern = true;
        break;
    }
  }

  navigateTo(): void {
    if (this.isAdmin) {
      this.router.navigate(['dashboard']);
    } else if (this.isMentor) {
      this.router.navigate(['mentordashboard']);
    } else if (this.isIntern) {
      this.router.navigate(['interndashboard']);
    }
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['']);
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}