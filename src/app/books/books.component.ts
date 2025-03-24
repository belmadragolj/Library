import { Component } from '@angular/core';
import { Book, BooksService } from '../services/books.service';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-books',
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books: Book[] = [];

  constructor(
    private booksService: BooksService,
    private dialog: MatDialog,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  openPopup(book: Book) {
    const dialogPopup = this.dialog.open(PopupComponent, {
      width: '500px',
      data: book,
    });

    dialogPopup.afterClosed().subscribe((updatedBook) => {
      if (updatedBook) {
        this.booksService.updateBook(updatedBook);
      }
    });
  }

  deleteBook(bookId: number) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }
  isDarkMode(): boolean {
    return this.themeService.isDark();
  }
}
