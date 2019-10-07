import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Rapper } from './rapper';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RappersService {
  rappersUrl = 'http://localhost:8080/api/rappers';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Rapper[]>(`${this.rappersUrl}`);
  }

  getRappers(): Observable<Rapper[]> {
    return this.http.get<Rapper[]>(this.rappersUrl).pipe(
      tap(Rapper => console.log('exibir lista de rappers'))
    );
  }

  getRapperById(id: number): Observable<Rapper> {
    const url = `${this.rappersUrl}/${id}`;
    return this.http.get<Rapper>(url).pipe(
      tap(_ => console.log(`exibir lista de rappers por id=${id}`))
    );

  }
  addRappers(rapper): Observable<Rapper> {
    console.log('adicionar');
    return this.http.post<Rapper>(`${this.rappersUrl}/new`, rapper, httpOptions)
      .pipe(catchError((e, rapper) => console.log(e, rapper))
      );
  }

  updateRapper(id, rapper): Observable<Rapper> {
    console.log('atualizar', rapper);
    return this.http.put<Rapper>(`${this.rappersUrl}/update/${id}`, rapper, httpOptions)
      .pipe(catchError((e, Rapper) => console.log(e, rapper))
      );
  }

  deleteRapper(id): Observable<Rapper> {
    const url = `${this.rappersUrl}/delete/${id}`;
    return this.http.delete<Rapper>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o rapper da lista por id=${id}`))
    );
  }
}
