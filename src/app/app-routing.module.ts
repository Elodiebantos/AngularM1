import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListedesdevoirsComponent } from './assignments/listedesdevoirs/listedesdevoirs.component';
import { ModificationComponent } from './assignments/modification/modification.component';
import { SuppressionComponent } from './assignments/suppression/suppression.component';
import { GenerationdonneestestComponent } from './assignments/generationdonneestest/generationdonneestest.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { AproposComponent } from './footer/apropos/apropos.component';
import { PlanDuSiteComponent } from './footer/plan-du-site/plan-du-site.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path:"home",component:AccueilComponent
  },
  {
    path:"",component:AccueilComponent
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
    path:"contacts", component:ContactsComponent
  },
  {
    path:"A propos", component:AproposComponent
  },
  {
    path:"plandusite", component:PlanDuSiteComponent
  }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
