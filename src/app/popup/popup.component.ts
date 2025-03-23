import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Book } from '../services/books.service';

@Component({
  standalone: true,
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle
  ]
})
export class PopupComponent {
  bookForm: FormGroup;
  isNewBook = false;

  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book,
    private formBuilder: FormBuilder
  ) {
    this.isNewBook = !data;
    this.bookForm = this.formBuilder.group({
      id: [data?.id || null],
      title: [data?.title || '', Validators.required],
      author: [data?.author || '', Validators.required],
      genre: [data?.genre || '', Validators.required],
      description: [data?.description || ''],
      coverImage: [data?.coverImage || 'assets/images/crime.jfif']
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.bookForm.valid) {
    this.dialogRef.close(this.bookForm.value);
    }
  }
}
