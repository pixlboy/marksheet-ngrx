import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SummaryRoutingModule } from './summary-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SummaryRoutingModule
  ],
  declarations: [HomeComponent]
})
export class SummaryModule { }
