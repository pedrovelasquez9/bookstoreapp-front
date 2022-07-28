import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../interfaces/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000/books';

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.baseUrl);
  }
}
