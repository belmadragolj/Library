import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Book, BooksService } from '../services/books.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isBooksPage: boolean = false;
  books: Book[] = [];

  constructor(private router: Router, private booksService: BooksService, private dialog: MatDialog) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isBooksPage = this.router.url === '/books';
    });
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  openAddBookPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      data: null 
    });
  
    dialogRef.afterClosed().subscribe(newBook => {
      if (newBook) {
        this.booksService.addBook(newBook);
      }
    });
  }
}
