import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    TableModule,
    ProgressSpinnerModule,
    PaginatorModule,
    InputTextareaModule,
    InputNumberModule,
    MultiSelectModule,
    KeyFilterModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    CardModule
  ]
})
export class PrimeNgModule { }
