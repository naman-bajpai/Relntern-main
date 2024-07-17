import { Component } from '@angular/core';
import { InternService } from './intern.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relntern';
  constructor(private internService: InternService) {
    
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
