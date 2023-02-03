import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

  constructor(
    // private daService:DuanService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private d:NhanvienService
   ){}
  loadData(){
    this.nv = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.nv = this.d.getMotNhanVien(id).subscribe(data => {
        console.log(data);
        this.nv = data;
      })
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  @Input() nv:any;
  daSua(nv:any){
    this.d.suaNhanvien(nv).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['nhanvien']);
    });
}

}
