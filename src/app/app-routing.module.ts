import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { Page404Component } from './pages/page404/page404.component';
import { TopHeadlinesComponent } from './pages/top-headlines/top-headlines.component';

const routes: Routes = [
  {path: '',redirectTo: 'titulares',pathMatch: 'full'},
  {path: 'noticias', component: NewsComponent},
  {path: 'titulares', component: TopHeadlinesComponent},
  {path: '**',component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
