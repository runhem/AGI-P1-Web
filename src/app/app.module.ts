import { HomeComponent } from './home/home.component';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, HeaderModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
