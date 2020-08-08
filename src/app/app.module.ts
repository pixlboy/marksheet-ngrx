import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({},{}),      //register the state container
    AppRoutingModule, 
    StoreDevtoolsModule.instrument({ 
      name: 'Marksheer Ngrx Demo',
      maxAge: 25, logOnly: 
      environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
