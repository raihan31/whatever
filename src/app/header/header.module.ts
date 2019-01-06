// Angular's Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Toolbar's module
import { ToolbarModule } from '../toolbar/toolbar.module';
// Header's Component
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class HeaderModule { }
