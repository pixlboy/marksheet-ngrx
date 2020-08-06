import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksheetRoutingModule } from './marksheet-routing.module';
import { HomeComponent } from './home/home.component';
import { ListMarksComponent } from './list-marks/list-marks.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MarksheetRoutingModule,
    FormsModule
  ],
  declarations: [HomeComponent, ListMarksComponent, AddMarksComponent]
})
export class MarksheetModule { }
