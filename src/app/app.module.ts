import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormStyle } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProductPageComponent,
    ProductComponent,
    EditProductComponent,
    AddProductComponent,
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
      { path: 'editproduct', component: EditProductComponent },
      { path: 'products', component: ProductPageComponent },
      { path: 'addproduct', component: AddProductComponent}
    ])
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
