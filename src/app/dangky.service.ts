import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DangkyService {

  constructor(private h: HttpClient) { }
  getUser() {
    return this.h.get('http://localhost:3000/login');
  }
  themUser(us: any) {
    return this.h.post('http://localhost:3000/login', us);
  }
  xoaUser(id: number) {
    return this.h.delete('http://localhost:3000/login/' + id)
  }
  suaUser(us: any) {
    return this.h.put('http://localhost:3000/login/' + us.id, us);
  }
}
