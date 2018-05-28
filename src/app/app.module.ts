import { NotFoundComponent } from './not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HumorComponent } from './humor/humor.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';


const appRoutes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'humor', component: HumorComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FormComponent,
    HomeComponent,
    HumorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    PanelModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
