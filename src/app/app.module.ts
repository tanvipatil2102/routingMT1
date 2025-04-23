import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserDashboardComponent } from './shared/components/user-dashboard/user-dashboard.component';
import { UserComponent } from './shared/components/user/user.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { RoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductComponent,
    ProductFormComponent,
    PageNotFoundComponent,
    UserDashboardComponent,
    UserComponent,
    UserFormComponent,
    GetConfirmComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
