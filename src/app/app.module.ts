import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DefinitionComponent } from './steps/1-definition/definition.component';
import { ChooseProductsComponent } from './steps/2-choose-products/choose-products.component';
import { ExcludeProductsComponent } from './steps/3-exclude-products/exclude-products.component';
import { BonusProductsComponent } from './steps/4-bonus-products/bonus-products.component';
import { ProductsLimitsComponent } from './steps/5-products-limits/products-limits.component';
import { ChooseClientsComponent } from './steps/6-choose-clients/choose-clients.component';
import { ExcludeClientsComponent } from './steps/7-exclude-clients/exclude-clients.component';
import { ClientsLimitsComponent } from './steps/8-clients-limits/clients-limits.component';
import { SummaryComponent } from './steps/9-summary/summary.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DefinitionComponent,
    ChooseProductsComponent,
    ExcludeProductsComponent,
    BonusProductsComponent,
    ProductsLimitsComponent,
    ChooseClientsComponent,
    ExcludeClientsComponent,
    ClientsLimitsComponent,
    SummaryComponent,
    DeleteConfirmationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
