import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'marksheet',
    loadChildren: './marksheet/marksheet.module#MarksheetModule'
  },
  {
    path: 'summary',
    loadChildren: './summary/summary.module#SummaryModule'
  },
  {
    path: 'homepage',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
