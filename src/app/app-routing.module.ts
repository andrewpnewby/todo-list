import {AboutAuthorComponent} from './about-author/about-author.component';
import {MainPageComponent} from './main-page/main-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MynotesComponent} from './mynotes/mynotes.component';
import {RformComponent} from './rform/rform.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main', component: MainPageComponent,
  children: [
      {path: 'notes', component: MynotesComponent},
      {path: 'rform', component: RformComponent}

    ]
  },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  {path: 'about', component: AboutAuthorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
