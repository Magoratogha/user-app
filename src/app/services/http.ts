import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Http {
  private readonly endpoint = 'https://carsil-root.onrender.com/';
  private headers = new HttpHeaders({
    'Content-Type': ' application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient
      .get(this.endpoint + 'api/users', { headers: this.headers })
      .pipe(take(1));
  }

  add(params: { name: string; email: string }): Observable<any> {
    return this.httpClient
      .post(this.endpoint + 'api/users', params, { headers: this.headers })
      .pipe(take(1));
  }
}
