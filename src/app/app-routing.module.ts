import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  {
    path:'',
    // redirectTo:'',pathMatch: "full"
    component: HomeComponent
  },
  {
    path:'stocks',
    component:StocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
