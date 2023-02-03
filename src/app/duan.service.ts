import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DuanService {
  constructor(private h: HttpClient) { }
  getNameDuAn(nameSearch:string){
    return this.h.get('http://localhost:3000/duan/' + '?tenDuAn_like=' + nameSearch);
  }
  getMotDuAn(id:number){
    return this.h.get('http://localhost:3000/duan/' + id);
  }
  getDuan() {
    return this.h.get('http://localhost:3000/duan');
  }
  themDuan(da: any) {
    return this.h.post('http://localhost:3000/duan', da);
  }
  xoaDuan(id: number) {
    return this.h.delete('http://localhost:3000/duan/' + id)
  }
  suaDuan(da: any) {
    return this.h.put('http://localhost:3000/duan/' + da.id, da);
  }
}
