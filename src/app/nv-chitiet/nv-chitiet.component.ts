import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nv-chitiet',
  templateUrl: './nv-chitiet.component.html',
  styleUrls: ['./nv-chitiet.component.css']
})
export class NvChitietComponent implements OnInit {

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

}
