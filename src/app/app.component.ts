import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './interfaces/books';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public books$?: Observable<Books[]>;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getBooks();
  }
}
