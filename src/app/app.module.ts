import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MyproductsComponent } from './pages/myproducts/myproducts.component';
import { UserService } from './services/user.serice';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {SellerProductsService} from "./services/seller-product.service";
import {SellerPageComponent} from "./pages/seller-page/seller-page.component";



@NgModule({
  declarations: [
    AdminPageComponent,
    SellerPageComponent,
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProductPageComponent,
    ProductComponent,
    MyproductsComponent,
    AddProductComponent,
    MyproductsComponent,
    NotFoundComponent,
    AdminPageComponent,
    UserTableComponent,
    TicketTableComponent,
    DashboardComponent,
    DeleteDialogComponent,
    AboutProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    SellerProductsService,
    ProductsService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
