import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatMenuModule, MatPaginator,
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
  ],
  declarations: []
})
export class MaterialModule { }
