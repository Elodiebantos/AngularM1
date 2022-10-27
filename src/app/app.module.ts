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


import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailsComponent } from './assignments/assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { SuppressionComponent } from './assignments/suppression/suppression.component';
import { ListedesdevoirsComponent } from './assignments/listedesdevoirs/listedesdevoirs.component';
import { ModificationComponent } from './assignments/modification/modification.component';
import { HomeComponent } from './assignments/home/home.component';
import { GenerationdonneestestComponent } from './assignments/generationdonneestest/generationdonneestest.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
    ButtonComponent,
    MenuComponent,
    SuppressionComponent,
    ListedesdevoirsComponent,
    ModificationComponent,
    HomeComponent,
    GenerationdonneestestComponent,
    LoginComponent
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
