// Angular's Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material's Module
import { MatToolbarModule, MatIconModule } from '@angular/material';

// Toolbar's Component
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class ToolbarModule { }
