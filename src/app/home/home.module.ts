// Angular's Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { routes } from './home.router';

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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DefaultComponent, NotFoundComponent, UnauthorizedComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    FormsModule,
    MaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ToolbarModule,
    ContentsModule
  ],
  exports: [DefaultComponent],
  bootstrap: [DefaultComponent]
})
export class HomeModule { }
