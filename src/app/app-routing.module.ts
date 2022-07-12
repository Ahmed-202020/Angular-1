import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path : "" , redirectTo : "header" , pathMatch : "full"} ,
  {path : "header" , component : HeaderComponent} ,
  {path : "portfolio" , component : PortfolioComponent , title:"Portfolio"} ,
  {path : "about" , component : AboutComponent , title: "About Us"} ,
  {path : "contact" , component : ContactComponent , title:"Contact Us" } ,
  {path : "footer" , component : FooterComponent} ,
  {path : "**" , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
