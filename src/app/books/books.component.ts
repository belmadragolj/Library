import { Component } from '@angular/core';
import { Book, BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
      console.log(this.books);
    });
  }
}
