import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, HowItWorksComponent, TeamComponent, ImageCarouselComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
