import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NhanvienService {
  constructor(private h: HttpClient) { }
  getNameNhanVien(nameSearch:string){
    return this.h.get('http://localhost:3000/nhanvien/' + '?ten_like=' +nameSearch );
  }
  getMotNhanVien(id:number){
    return this.h.get('http://localhost:3000/nhanvien/' + id);
  }
  getNhanvien() {
    return this.h.get('http://localhost:3000/nhanvien');
  }
  themNhanvien(nv: any) {
    return this.h.post('http://localhost:3000/nhanvien', nv);
  }
  xoaNhanvien(id: number) {
    return this.h.delete('http://localhost:3000/nhanvien/' + id)
  }
  suaNhanvien(nv: any) {
    return this.h.put('http://localhost:3000/nhanvien/' + nv.id, nv);
  }
}
