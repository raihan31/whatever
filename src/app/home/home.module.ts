// Angular's Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material's Module
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { MatSidenavModule, MatListModule } from '@angular/material';

// header's module
// import { HeaderModule } from '../header/header.module';
import { ToolbarModule } from '../toolbar/toolbar.module';

// Content's module
import { ContentsModule } from '../contents/contents.module';

// Footer's Module
import { FooterModule } from '../footer/footer.module';

// Home's content
import { DefaultComponent } from './components/default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ToolbarModule,
    ContentsModule
  ],
  exports: [DefaultComponent]
})
export class HomeModule { }
