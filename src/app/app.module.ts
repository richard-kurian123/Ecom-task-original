import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PgNotFoundComponent } from './pg-not-found/pg-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { ProductDetailsComponent } from './modules/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PgNotFoundComponent,
    TestCompComponent
    // ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
