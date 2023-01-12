import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatChip} from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { AppComponent } from './app.component';
import { AssignmentDetailsComponent } from './assignments/assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { SuppressionComponent } from './assignments/suppression/suppression.component';
import { ListedesdevoirsComponent } from './assignments/listedesdevoirs/listedesdevoirs.component';
import { ModificationComponent } from './assignments/modification/modification.component';
import { GenerationdonneestestComponent } from './assignments/generationdonneestest/generationdonneestest.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { AproposComponent } from './footer/apropos/apropos.component';
import { PlanDuSiteComponent } from './footer/plan-du-site/plan-du-site.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import {MaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
    ButtonComponent,
    MenuComponent,
    SuppressionComponent,
    ListedesdevoirsComponent,
    ModificationComponent,
    GenerationdonneestestComponent,
    LoginComponent,
    ContactsComponent,
    AproposComponent,
    PlanDuSiteComponent,
    AccueilComponent,
    EditAssignmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatDividerModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, RouterModule, RouterTestingModule, AppRoutingModule, FontAwesomeModule, HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
