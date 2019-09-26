import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map} from 'rxjs/operators';
import { Rapper } from './rapper';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RappersService {
  rappersUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  listar() {
return this.http.get<any[]>(`${this.rappersUrl}`)
  }
   
  getRapper(): Observable<Rapper[]> {
    return this.http.get<Rapper[]>(this.rappersUrl).pipe(
      tap(Rapper => console.log('exibir lista de rappers'))
    );
  }

  getRapper(id: number): Observable<Rapper> {
    const url = `${this.rappersUrl}/${id}`;
    return this.http.get<Rapper>(url).pipe(
      tap(_ => console.log(`exibir lista de rappers por id=${id}`))
    );
    
  }

  addRapper(rapper): Observable<Rapper> {
    return this.http.post<Rapper>(this.rappersUrl, rapper, httpOptions).pipe(
      tap((rapper: Rapper) => console.log(`adicionar um rapper id=${rapper.id}`))
    );
  }

  updateRapper(id, rapper): Observable<any> {
    const url = `${this.rappersUrl}/${id}`;
    return this.http.put(url, rapper, httpOptions).pipe (
      tap(_ => console.log(`atualiza o rapper pelo id=`))
    );
  }

  deleteRapper (id): Observable<Rapper> {
    const url = `${this.rappersUrl}/delete/${id}`
  }
}