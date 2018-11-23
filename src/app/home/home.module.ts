// Angular's Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material's Module
import { MaterialModule } from '../material/material.module';

// Home's Component
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [DefaultComponent]
})
export class HomeModule { }
