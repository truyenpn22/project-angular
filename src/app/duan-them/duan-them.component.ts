import { Component, OnInit } from '@angular/core';
import { DuanService } from '../duan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {
  tenDuAn:string='';
  ngayStart : string='';
  tien :string='';
  leader:string='';
  xuly(fullinfo:any){
    console.log("Full data : ",fullinfo);
    console.log("Tên dự án :", this.tenDuAn);
    console.log("Ngày bắt đầu :", this.ngayStart);
    console.log("Tiền : " , this.tien);
    console.log("Leader : ", this.leader);
   }
  constructor(
    private daService: DuanService,
    private router: Router,
    private d:DuanService
  ) { }
  // da: DuAn = <DuAn>{};
  // themDA() {
  //   this.daService.themDuan(this.da);
  //   this.router.navigate(['duan']);
  // }
  ngOnInit(): void {}
  dathem(da:any){
    this.d.themDuan(da).subscribe ( data => alert('Thêm thành công'));
    this.router.navigate(['duan']);
  }
}
