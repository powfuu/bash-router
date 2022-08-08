import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { Section2Component } from './section2/section2.component'
import { AboutComponentComponent } from './about-component/about-component.component'
import { InformationComponentComponent } from './information-component/information-component.component'
import { ErrorComponent } from './error/error.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'another-component', component: Section2Component},
  {path:'information-component', component: InformationComponentComponent},
  {path:'about-component', component: AboutComponentComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
