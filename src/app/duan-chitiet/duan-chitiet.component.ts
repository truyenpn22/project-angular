import { Component, OnInit } from '@angular/core';
import { DuanService } from '../duan.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-duan-chitiet',
  templateUrl: './duan-chitiet.component.html',
  styleUrls: ['./duan-chitiet.component.css']
})
export class DuanChitietComponent implements OnInit {

  constructor(
    // private daService:DuanService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private d:DuanService
   ){}

  loadData(){
    this.da = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.da = this.d.getMotDuAn(id).subscribe(data => {
        console.log(data);
        this.da = data;
      })
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  @Input() da:any;
}
