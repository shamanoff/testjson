import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
  MatIconModule, MatInputModule, MatMenuModule, MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
