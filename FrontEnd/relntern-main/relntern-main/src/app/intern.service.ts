import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Intern } from 'src/models/intern.mode';
import { Task } from 'src/models/task.mode';

@Injectable({
  providedIn: 'root',
})
export class InternService {

  searchInternsByName(fullname: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  
  API = 'http://localhost:8081';

  public registerIntern(interndetails: any) {
    return this.http.post(this.API + '/registerIntern', interndetails);
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getInterns() {
    return this.http.get(this.API + '/getInterns');
  }
  public getActiveInterns() {
    return this.http.get(this.API + '/getActiveInterns');
  }
  public getInActiveInterns() {
    return this.http.get(this.API + '/getInActiveInterns');
  }

  public deleteIntern(id: any) {
    return this.http.delete(this.API + '/deleteIntern?id=' + id);
  }

  public getInternById(id:any){
    console.log(id)
    let url="http://localhost:8081/viewtask/"+id
    // console.log(url)
    return this.http.get<Intern>(url)
  }

  public getInternByUserId(userId: any){
    console.log(userId);
    let url="http://localhost:8081/viewByUserId/"+userId
    console.log(url);
    return this.http.get<Intern>(url);
  }

  public getByMentor(mentoremail:any){
    console.log(mentoremail);
    
    let url="http://localhost:8081/getByMentor/"+mentoremail
    return this.http.get<Intern>(url);
  }

  public getActiveByMentor(mentoremail:any){
    console.log(mentoremail);
    
    let url="http://localhost:8081/getActiveByMentor/"+mentoremail
    return this.http.get<Intern>(url);
  }

  public getMentorByMentoruserid(userId: any){
    console.log(userId);
    let url="http://localhost:8081/viewByMentoruserid/"+userId
    console.log(url);
    return this.http.get<Intern>(url);
  }


  public updateIntern(intern: any) {
    return this.http.put(this.API + '/updateIntern', intern);
  }

  public getInactiveInterns() {
    return this.http.get(this.API + '/getInactiveInterns');
  }

  public moveToInactive(internId: number) {
    console.log(internId);
    return this.http.post(this.API + '/' + internId + '/moveToInactive', {});
  }

  public closeInternship(internId: number) {
    console.log(internId);
    return this.http.post(this.API + '/' + internId + '/closeInternship', {});
  }

  public deleteInactiveIntern(id: any) {
    return this.http.delete(this.API + '/deleteInactiveIntern?id=' + id);
  }
  
  public registerMentor(mentordetails: any) {
    return this.http.post(this.API + '/registerMentor', mentordetails);
  }

  public getMentor() {
    return this.http.get(this.API + '/getMentor');
  }

  public deleteMentor(mentorid: any) {
    return this.http.delete(this.API + '/deleteMentor?mentorid=' + mentorid);
  }

  public registerTask(taskdetails: any,internId:any) {
    return this.http.post(this.API + '/registerTask/' + internId, taskdetails);
  }

  public getTask() {
    return this.http.get(this.API + '/getTask');
  }

  public getTaskById(internId:any) {
    return this.http.get(this.API + '/getTaskById/'+internId);
  }

  public updateTask(taskId:any,taskdetails: any) {
    return this.http.put(this.API + '/updateTaskById/'+taskId , taskdetails);
  }


  public deleteTask(id: any) {
    return this.http.delete(this.API + '/deleteTask?id=' + id);
  }

  public uploaddocument(document: any){
    console.log(document);
    return this.http.post(this.API + '/uploaddocument',document);
  }

  public getDocumentByInternId(internId:any){
    return this.http.get(this.API+'/getInternDocument/'+internId)
  }

  public dataSource = new Subject<any>();
  data = this.dataSource.asObservable();
  sendData(data: any) {
    this.dataSource.next(data);
  }

  public sendEmail(body: any) {
    return this.http.post(this.API + '/mail/send', body);
  }
  
}
