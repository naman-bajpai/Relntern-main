import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddmentorComponent } from './addmentor/addmentor.component';
import { StatusComponent } from './status/status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InactiveComponent } from './inactive/inactive.component';
import { InternsuccessComponent } from './internsuccess/internsuccess.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateDialogBodyComponent } from './update-dialog-body/update-dialog-body.component';
import { InternprofileComponent } from './internprofile/internprofile.component';
import { MaterialModule } from 'src/material.module';
import { ToastrModule } from 'ngx-toastr';

import { InvalidDialogComponent } from './invalid-dialog/invalid-dialog.component';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { InterndashboardComponent } from './interndashboard/interndashboard.component';
import { InactiveDeleteComponent } from './inactive-delete/inactive-delete.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgChartsModule } from 'ng2-charts';
import { MentordeleteComponent } from './mentordelete/mentordelete.component';
import { InactiveprofiledialogComponent } from './inactiveprofiledialog/inactiveprofiledialog.component';
import { GantchartComponent } from './gantchart/gantchart.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskdeleteComponent } from './taskdelete/taskdelete.component';
import { SignupComponent } from './signup/signup.component';
import { ClarityModule } from '@clr/angular';
import { MatMenuModule } from '@angular/material/menu';
import { TaskStatusComponent } from './task-status/task-status.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
    ListComponent,
    AddmentorComponent,
    StatusComponent,
    InactiveComponent,
    InternsuccessComponent,
    MentorlistComponent,
    DialogBodyComponent,
    UpdateDialogBodyComponent,
    InternprofileComponent,
    InvalidDialogComponent,
    MentordashboardComponent,
    InterndashboardComponent,
    InactiveDeleteComponent,
    ScheduleComponent,
    MentordeleteComponent,
    InactiveprofiledialogComponent,
    GantchartComponent,
    AddTaskComponent,
    ListComponent,
    ViewTaskComponent,
    TaskdeleteComponent,
    SignupComponent,
    TaskStatusComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MaterialModule,
    ToastrModule.forRoot({progressBar:true,progressAnimation:'increasing',preventDuplicates:true}),
    GanttModule,
    NgChartsModule,
    MatMenuModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router:Router){
    
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
