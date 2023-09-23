import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { Exercicio01Component } from './exercicio01/exercicio01.component';
import { Exercicio02aComponent } from './exercicio02a/exercicio02a.component';
import { Exercicio02bComponent } from './exercicio02b/exercicio02b.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'ex01',
    component: Exercicio01Component
  },
  {
    path: 'ex02a',
    component: Exercicio02aComponent
  },
  {
    path: 'ex02b',
    component: Exercicio02bComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
