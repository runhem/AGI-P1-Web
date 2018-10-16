import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [AppComponent, TeamComponent],
  imports: [BrowserModule, HomeModule, HeaderModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
