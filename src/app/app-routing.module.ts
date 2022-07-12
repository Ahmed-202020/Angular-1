import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CabinComponent } from './cabin/cabin.component';
import { CakeComponent } from './cake/cake.component';
import { CircusComponent } from './circus/circus.component';
import { ContactComponent } from './contact/contact.component';
import { ControlerComponent } from './controler/controler.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SafeComponent } from './safe/safe.component';
import { SubmarinComponent } from './submarin/submarin.component';

const routes: Routes = [
  {path : "" , redirectTo : "header" , pathMatch : "full"} ,
  {path : "header" , component : HeaderComponent} ,
  {path : "portfolio" , component : PortfolioComponent , title:"Portfolio" , children : [
    {path: "cabin" , component: CabinComponent} ,
    {path: "cake" , component: CakeComponent} ,
    {path: "circus" , component: CircusComponent} ,
    {path: "controler" , component: ControlerComponent} ,
    {path: "safe/:id" , component: SafeComponent} ,
    {path: "submarin" , component: SubmarinComponent}
  ]} ,
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
