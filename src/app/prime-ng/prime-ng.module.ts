import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    TriStateCheckboxModule,
    CheckboxModule,
    ListboxModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    CardModule,
    RadioButtonModule
  ],
  exports: [
    CommonModule,
    TableModule,
    TriStateCheckboxModule,
    CheckboxModule,
    ListboxModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    CardModule,
    RadioButtonModule
  ]
})
export class PrimeNgModule { }
