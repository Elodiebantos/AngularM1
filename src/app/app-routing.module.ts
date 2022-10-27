import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListedesdevoirsComponent } from './assignments/listedesdevoirs/listedesdevoirs.component';
import { ModificationComponent } from './assignments/modification/modification.component';
import { SuppressionComponent } from './assignments/suppression/suppression.component';
import { GenerationdonneestestComponent } from './assignments/generationdonneestest/generationdonneestest.component';
import { HomeComponent } from './assignments/home/home.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path:"", component:HomeComponent
  },
  {
    path:"listedesdevoirs", component:ListedesdevoirsComponent
  },
  {
    path:"modif", component:ModificationComponent
  },
  {
    path:"suppr", component:SuppressionComponent
  },
  {
    path:"generate",component:GenerationdonneestestComponent
  },
  {
    path:"home", component:AssignmentsComponent
  },
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
