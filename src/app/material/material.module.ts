// Angular's Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material's Module
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// FlexLayout's Modules
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
