import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'quiz', component: HomeComponent },
  { path: 'acceuil', component: AccueilComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
