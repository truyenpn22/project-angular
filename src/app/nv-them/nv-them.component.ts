import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {
  ho:string='';
  ten:string='';
  ngaysinh:string='';
  phai:string='';
  khuvuc:string='';
  xuly(fullinfo:any){
    console.log("Full data : ",fullinfo);
    console.log("Họ:", this.ho);
    console.log("Tên:", this.ten);
    console.log("Năm sinh:", this.ngaysinh);
    console.log("Giới tính : " , this.phai);
    console.log("Khu vực : " , this.khuvuc);
    
   }
  constructor(
    private daService: NhanvienService,
    private router: Router,
    private d:NhanvienService
  ) { }
  ngOnInit(): void {}
  dathem(da:any){
    this.d.themNhanvien(da).subscribe ( data => alert('Thêm thành công'));
    this.router.navigate(['nhanvien']);
  }

}
