import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DangkyService } from '../dangky.service';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  // un:string='';
  // email : string='';
  // pw :string='';
  // xuly(fullinfo:any){
  //   console.log("Full data : ",fullinfo);
  //   console.log(this.un);
  //   console.log(this.email);
  //   console.log(this.pw);
  //  }
  un: any;
    email: any;
    pw: any = '';
  constructor(
    private usService:  DangkyService,
    private router: Router,
    private u: DangkyService
  ) { }

  ngOnInit(): void {}
  dathem(us:any){
    this.u.themUser(us).subscribe ( data => alert('Đăng ký thành công'));

  }

}
