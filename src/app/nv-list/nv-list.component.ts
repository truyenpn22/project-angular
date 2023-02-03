import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NhanvienService } from '../nhanvien.service';
@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {

  constructor(private d:NhanvienService) { }
  listNhanvien:any;
  ngOnInit(): void {
    this.listNhanvien = this.d.getNhanvien().subscribe ( 
      data => this.listNhanvien= data
    );
  }
  xoaNV(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaNhanvien(id).subscribe(data => alert('Xóa thành công'))
    }
}
@Output() chonNV = new EventEmitter();
suaNV(tk:any){
  console.log(tk);    
  this.chonNV.emit(tk);
}
searchName:any;
  searchByName(){ 
    console.log(this.searchName);
    this.d.getNameNhanVien(this.searchName).subscribe ( 
      data => this.listNhanvien = data
    );
  }
}
