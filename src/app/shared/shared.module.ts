import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsNavbarComponent } from './component/os-navbar/os-navbar.component';
import { OsFooterComponent } from './component/os-footer/os-footer.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CounterService } from './service/counter.service';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';

export const COMPONENT = [
  OsNavbarComponent,
  OsFooterComponent,
  HomePageComponent
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [COMPONENT],
  providers: [CounterService],
  exports:[COMPONENT]
})
export class SharedModule { 
  // static forRoot():ModuleWithProviders{ 
  //   return {
  //     ngModule: SharedModule,
  //     providers: [CounterService]
  //   }
  // }
}
