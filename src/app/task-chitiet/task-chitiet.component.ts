import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-chitiet',
  templateUrl: './task-chitiet.component.html',
  styleUrls: ['./task-chitiet.component.css']
})
export class TaskChitietComponent implements OnInit {

  constructor(
    // private daService:DuanService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private d:TaskService
   ){}
  loadData(){
    this.tk = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.tk = this.d.getMotTask(id).subscribe(data => {
        console.log(data);
        this.tk = data;
      })
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  @Input() tk:any;

}
