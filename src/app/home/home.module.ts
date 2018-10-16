import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, HowItWorksComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
