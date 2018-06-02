import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HumorComponent } from './humor/humor.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { UserService } from './services/user.service';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';
import { TasksService } from './services/tasks.service';
import { TasksComponent } from './tasks/tasks.component';

// PrimeNg Components
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { SpinnerModule } from 'primeng/spinner';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import { PickListModule } from 'primeng/picklist';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { GrowlModule } from 'primeng/growl';
import { ChartComponent } from './chart/chart.component';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InsightsComponent } from './insights/insights.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'form', component: FormComponent },
  { path: 'humor', component: HumorComponent },
  { path: 'user-data-table', component: UserDataTableComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'insights', component: InsightsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NotFoundComponent,
    FormComponent,
    HomeComponent,
    HumorComponent,
    UserDataTableComponent,
    ChartComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    OverlayPanelModule,
    LayoutModule,
    ButtonModule,
    PaginatorModule,
    ChartModule,
    SpinnerModule,
    CalendarModule,
    PickListModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextareaModule,
    PanelModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    UserService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
