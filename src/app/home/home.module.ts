import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TeamComponent } from './team/team.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [HomeComponent, HowItWorksComponent, TeamComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
