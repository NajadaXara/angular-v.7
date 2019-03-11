import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Leave } from '../models';

@Injectable({ providedIn: 'root' })
export class LeaveService {
  private url = 'http://localhost:3003';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Leave[]>(this.url+"/leaves");
  }

  getById(id: number) {
    return this.http.get(this.url+'/leaves/' + id);
  }

  create(leave: Leave) {
    return this.http.post(this.url+'/leaves', leave);
  }

  update(leave: Leave) {
    return this.http.put(this.url+'/leaves/' + leave.id, leave);
  }

  delete(id: number) {
    return this.http.delete(this.url+`/leaves/` + id);
  }
}
