import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  {
    path: '',
    redirectTo: '/home',  
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})
export class AppRoutingModule {}
