import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ProgressSpinnerModule,
    PaginatorModule
  ]
})
export class PrimeNgModule { }
