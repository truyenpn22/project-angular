import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private d: TaskService,private router: Router,) { }
  listTask: any;
  ngOnInit(): void {
    this.listTask = this.d.getTask().subscribe(
      data => this.listTask = data
    );
  }
  xoaTK(id: number) {
    if (confirm('Xóa thật không') == true) {
      this.d.xoaTask(id).subscribe(data => alert('Xóa thành công'))
    }
  }
  @Output() chonDA = new EventEmitter();
  suaTK(tk: any) {
    console.log(tk);
    this.chonDA.emit(tk);
  }
  searchName:any;
  searchByName(){ 
    console.log(this.searchName);
    this.d.getNameTask(this.searchName).subscribe ( 
      data => this.listTask = data
    );
  }
}
