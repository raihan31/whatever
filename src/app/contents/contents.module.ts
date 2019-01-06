// Angular's Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material's modules
import { MatSidenavModule } from '@angular/material';

// Sidebar modules
import { SidebarModule } from '../sidebar/sidebar.module';

// Contet's component
import { ContentDefaultComponent } from './default/content-default.component';



@NgModule({
  declarations: [ContentDefaultComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    SidebarModule
  ],
  exports: [
    ContentDefaultComponent
  ]
})
export class ContentsModule { }
