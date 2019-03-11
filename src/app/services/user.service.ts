import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private url = 'http://localhost:3003';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.url+"/users");
  }

  getById(id: number) {
    return this.http.get(this.url+'/users/' + id);
  }

  create(user: User) {
    return this.http.post(this.url+'/users', user);
  }

  update(user: User) {
    return this.http.put(this.url+'/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.url+`/users/` + id);
  }
}
