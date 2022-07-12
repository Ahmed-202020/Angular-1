import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CabinComponent } from './cabin/cabin.component';
import { CakeComponent } from './cake/cake.component';
import { CircusComponent } from './circus/circus.component';
import { ControlerComponent } from './controler/controler.component';
import { SafeComponent } from './safe/safe.component';
import { SubmarinComponent } from './submarin/submarin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    CabinComponent,
    CakeComponent,
    CircusComponent,
    ControlerComponent,
    SafeComponent,
    SubmarinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
