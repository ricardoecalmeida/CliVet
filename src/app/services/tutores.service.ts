import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutores } from '../models/tutores';

@Injectable({
  providedIn: 'root'
})
export class TutoresService {

  tutoresUrl: string = "assets/dados.json";

  tutores: Array<Tutores> = [];

  constructor(private http: HttpClient) { }

  // CRUD

  getAll(): Observable<any> {
    return this.http.get<any>(this.tutoresUrl);
  }

  getById(id: string): Observable<Tutores> {
    return this.http.get<Tutores>(`${this.tutoresUrl}/${id}`);
  }

  create(tutores: Tutores): Observable<Tutores> {
    return this.http.post<Tutores>(this.tutoresUrl, tutores);
  }

  update(tutores: Tutores): Observable<Tutores> {
    return this.http.put<Tutores>(`${this.tutoresUrl}/${tutores.id}`, tutores);
  }

  delete(tutores: Tutores): Observable<Tutores> {
    return this.http.delete<Tutores>(`${this.tutoresUrl}/${tutores.id}`);
  }

}
