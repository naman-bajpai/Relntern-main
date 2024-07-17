import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.roledesc=localStorage.getItem("role");
      this.validaterole(this.roledesc);
  }

  isAdmin: boolean=false;
  isMentor: boolean=false;
  isintern: boolean=false;
  roledesc: any;
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
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
