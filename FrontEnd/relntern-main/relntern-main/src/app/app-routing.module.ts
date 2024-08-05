import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { AddmentorComponent } from './addmentor/addmentor.component';
import { StatusComponent } from './status/status.component';
import { InactiveComponent } from './inactive/inactive.component';
import { InternsuccessComponent } from './internsuccess/internsuccess.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { InternprofileComponent } from './internprofile/internprofile.component';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { InterndashboardComponent } from './interndashboard/interndashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GantchartComponent } from './gantchart/gantchart.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UpdateDialogBodyComponent } from './update-dialog-body/update-dialog-body.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '',redirectTo:"login",pathMatch:"full" }, /**/
  {path: 'login',component:LoginComponent },  /**/
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' }},
  { path: 'add', component: AddComponent , canActivate: [AuthGuard], data: { expectedRole: ['admin','mentor'] } },
  { path: 'list', component: ListComponent,canActivate: [AuthGuard], data: { expectedRole: ['admin','mentor'] }},
  { path: 'addmentor', component: AddmentorComponent ,canActivate: [AuthGuard], data: { expectedRole: ['admin'] }},
  { path: 'status', component: StatusComponent },
  { path: 'inactive', component: InactiveComponent, canActivate: [AuthGuard], data: { expectedRole: ['admin','mentor'] } },
  { path: 'internsuccess', component: InternsuccessComponent },
  { path: 'mentorlist', component: MentorlistComponent , canActivate: [AuthGuard], data: { expectedRole: ['admin'] } },
  { path: 'internprofile', component: InternprofileComponent },
  { path: 'mentordashboard', component: MentordashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'mentor' } },
  { path: 'interndashboard', component: InterndashboardComponent ,canActivate: [AuthGuard], data: { expectedRole: 'intern' }},
  { path: 'schedule', component: ScheduleComponent },
  { path: 'gantchart', component: GantchartComponent ,canActivate: [AuthGuard], data: { expectedRole: ['admin','mentor'] }},
  { path: 'add-task/:internId', component: AddTaskComponent, canActivate: [AuthGuard], data: { expectedRole: ['mentor'] }},
  { path: 'view-task/:internId', component: ViewTaskComponent},
  { path: 'update-dialog-body', component: UpdateDialogBodyComponent, canActivate: [AuthGuard], data: { expectedRole: ['admin','mentor'] }},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {}
