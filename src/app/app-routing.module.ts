import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './steps/1-definition/definition.component';
import { ChooseProductsComponent } from './steps/2-choose-products/choose-products.component';
import { ExcludeProductsComponent } from './steps/3-exclude-products/exclude-products.component';
import { BonusProductsComponent } from './steps/4-bonus-products/bonus-products.component';
import { ProductsLimitsComponent } from './steps/5-products-limits/products-limits.component';
import { ChooseClientsComponent } from './steps/6-choose-clients/choose-clients.component';
import { ExcludeClientsComponent } from './steps/7-exclude-clients/exclude-clients.component';
import { ClientsLimitsComponent } from './steps/8-clients-limits/clients-limits.component';
import { SummaryComponent } from './steps/9-summary/summary.component';
import { RouteGuardService } from './services/route-guard/route-guard.service';

const routes: Routes = [
  {path:'definition',component:DefinitionComponent},
  {path:'chooseProducts',component:ChooseProductsComponent,canActivate:[RouteGuardService]},
  {path:'bonusProducts',component:BonusProductsComponent,canActivate:[RouteGuardService]},
  {path:'excludeProducts',component:ExcludeProductsComponent,canActivate:[RouteGuardService]},
  {path:'productsLimits',component:ProductsLimitsComponent,canActivate:[RouteGuardService]},
  {path:'chooseClients',component:ChooseClientsComponent,canActivate:[RouteGuardService]},
  {path:'excludeClients',component:ExcludeClientsComponent,canActivate:[RouteGuardService]},
  {path:'clientsLimits',component:ClientsLimitsComponent,canActivate:[RouteGuardService]},
  {path:'summary',component:SummaryComponent,canActivate:[RouteGuardService]},
  {path:'',redirectTo: '/definition', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
