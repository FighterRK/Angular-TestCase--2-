import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {  PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServicesComponent  } from "./services/services.component";

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'services', component : ServicesComponent},
  {path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
