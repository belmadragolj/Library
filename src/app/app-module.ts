import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';   
import { AppRoutingModule } from './app-routing.module';  
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {}
