import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    HeaderComponent,
    MyCartComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
