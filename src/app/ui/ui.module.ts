import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { AlertComponent } from './layout/alert/alert.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
