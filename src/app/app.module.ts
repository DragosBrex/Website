import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { UserService } from './services/user.serice';
import { AuthService } from './services/auth.service';
import { SellerPageComponent } from './pages/seller-page/seller-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProductPageComponent,
    ProductComponent,
    MyproductsComponent,
    AddProductComponent,
    MyproductsComponent,
    SellerPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignupPageComponent },
      { path: 'myproducts', component: MyproductsComponent },
      { path: 'products', component: ProductPageComponent },
      { path: 'products/:productId', component: ProductComponent }
    ])
  ],
  providers: [
    ProductsService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
