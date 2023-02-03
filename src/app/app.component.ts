import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { DuanService } from './duan.service';
import { NhanvienService } from './nhanvien.service';
import { TaskService } from './task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNhanvien: any;
  listTask: any;
  listDuan: any;
  constructor(
    private d:DuanService,
    private n:NhanvienService,
    private t: TaskService,
    private auth:AuthService,
    private _http: HttpClient,
    ) {}
    thoat(){ this.auth.thoat();  }
    daDangNhap() { return this.auth.daDangNhap()}
  
    ngOnInit(): void {
    this.listDuan = this.d.getDuan().subscribe ( 
      data => this.listDuan= data
    );
    this.listNhanvien = this.n.getNhanvien().subscribe ( 
      data => this.listNhanvien= data
    );
    this.listTask = this.t.getTask().subscribe(
      data => this.listTask = data
    );
  }

}
