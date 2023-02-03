import { Component, OnInit } from '@angular/core';
// import { DuAn } from '../du-an';
import { DuanService } from '../duan.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {

  constructor(
    // private daService:DuanService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private d:DuanService
   ){}
  //  idDA:number=Number(this.activeRoute.snapshot.params['id']);
  //  da:DuAn=<DuAn>{};// thông tin sản phẩm đang chỉnh
  //  ngOnInit():void{
  //   let kq=this.daService.getMotDuAn(this.idDA);
  //   this.da=kq as DuAn;
  //  }
  //  capnhatDA(){
  //   this.daService.capnhatDuAn(this.da);
  //   this.router.navigate(['duan']);
  //  }
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
  daSua(da:any){
    this.d.suaDuan(da).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['duan']);
    });
}

}
