// Angular's Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material's Modules
import { MaterialModule } from './material/material.module';

// App's Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

// App's Components
import { DefaultComponent } from './home/components/default/default.component';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class AppModule { }
