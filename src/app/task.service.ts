import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private h: HttpClient) { }
  getNameTask(nameSearch:string){
    return this.h.get('http://localhost:3000/task/' + '?tenTask_like=' +nameSearch );
  }
  getMotTask(id:number){
    return this.h.get('http://localhost:3000/task/' + id);
  }
  getTask() {
    return this.h.get('http://localhost:3000/task');
  }
  themTask(tk: any) {
    return this.h.post('http://localhost:3000/task', tk);
  }
  xoaTask(id: number) {
    return this.h.delete('http://localhost:3000/task/' + id)
  }
  suaTask(tk: any) {
    return this.h.put('http://localhost:3000/task/' + tk.id, tk);
  }
}
