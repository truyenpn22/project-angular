import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { DuAn } from '../du-an';
@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {

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
  daSua(da:any){
    this.d.suaTask(da).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['task']);
    });
}
listNhanVien:NhanVien[] = [
  { id: 1, ho: 'Phan', ten: 'Truyen', ngaysinh: '19/07/2002', phai: true, khuvuc: 'Trung' },
  { id: 2, ho: 'Huỳnh', ten: 'Chương', ngaysinh: '19/07/2002', phai: true, khuvuc: 'Trung' },
  { id: 3, ho: 'Phan', ten: 'Đỉnh', ngaysinh: '19/07/2002', phai: true, khuvuc: 'Nam' },
];
listDuAn:DuAn[]=[
  {id:1, tenDuAn:'Quản lý trại heo', ngayStart:'2022-03-01', tien:67000000, leader:1, thanhvien:[1,3,4]},
  {id:2, tenDuAn:'Cây xanh công viên', ngayStart:'2022-04-02', tien:98500000, leader:1, thanhvien:[1,3,4]},
  {id:3, tenDuAn:'Website Văn hoá Việt', ngayStart:'2022-04-15', tien:35000000, leader:2, thanhvien:[2,4]},
  {id:4, tenDuAn:'Website Du lịch Bụi', ngayStart:'2022-04-21', tien:75500000, leader:2, thanhvien:[2,4]},
  {id:5, tenDuAn:'Quản lý nhà thuốc Vĩnh An', ngayStart:'2022-05-01', tien:97000000, leader:3, thanhvien:[3,4]},
  {id:6, tenDuAn:'Chăm sóc thú cưng', ngayStart:'2022-02-11', tien:18000000, leader:3, thanhvien:[3,4]},

];
}
