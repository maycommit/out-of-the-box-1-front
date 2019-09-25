import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RappersService {
  rappersUrl = 'http://localhost:8080/api/all';
  constructor(private http: HttpClient) { }

  listar() {
return this.http.get<any[]>(`${this.rappersUrl}`)
  }
}
