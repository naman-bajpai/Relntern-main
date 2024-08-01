import { Component, OnInit } from '@angular/core';
import { InternService } from './intern.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'relntern';
  isMentor: boolean = false;
  isAdmin: boolean = false;

  constructor(private internService: InternService) {}

  ngOnInit(): void {
    // Example logic to determine if the user is a mentor or admin.
    // You should replace this with actual logic based on your authentication system.
    this.checkUserRole();
  }

  // A method to determine user roles
  checkUserRole(): void {
    // This is a placeholder. Replace this logic with actual role-checking.
    // For example, you might use a service that gets the user role from a backend or session storage.
    const user = { role: 'admin' }; // Replace with actual user fetching logic

    this.isMentor = user.role === 'mentor';
    this.isAdmin = user.role === 'admin';
  }

  register(registerForm: FormGroup) {
    this.internService.registerIntern(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => console.log(err)
    );
  }
}
