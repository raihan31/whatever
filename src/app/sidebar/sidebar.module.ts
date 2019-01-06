import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDefaultComponent } from './sidebar-default/sidebar-default.component';

@NgModule({
  declarations: [SidebarDefaultComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarDefaultComponent
  ]
})
export class SidebarModule { }
