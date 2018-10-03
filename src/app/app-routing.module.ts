import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomePageComponent } from './shared/component/home-page/home-page.component';
import { LoginComponent } from './signup/component/login/login.component';
import { SignupModule } from './signup/signup.module';

const appRoutes : Routes = [
  { path: '', redirectTo:'/Home', pathMatch:'full' },
  { path:'Home', component: HomePageComponent },

  { 
    path:'login', 
    loadChildren: './signup/signup.module#SignupModule'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
