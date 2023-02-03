import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanService } from '../duan.service';
@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

  constructor(private d:DuanService) { }
  listDuan:any;
  ngOnInit(): void {
    this.listDuan = this.d.getDuan().subscribe ( 
      data => this.listDuan= data
    );
  }
  xoaDA(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaDuan(id).subscribe(data => alert('Xóa thành công'))
    }
}
// @Output() chonDA = new EventEmitter();
// suaDA(da:any){
//   console.log(da);    
//   this.chonDA.emit(da);
// }
searchName:any;
  searchByName(){ 
    console.log(this.searchName);
    this.d.getNameDuAn(this.searchName).subscribe ( 
      data => this.listDuan = data
    );
  }

}
