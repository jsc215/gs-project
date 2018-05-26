import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatMenuModule,
  MatTabsModule,
  MatChipsModule,
  MatIconModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
