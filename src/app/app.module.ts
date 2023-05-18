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
import {TicketTableComponent} from "./components/ticket-table/ticket-table.component";
import {UserTableComponent} from "./components/user-table/user-table.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DeleteDialogComponent} from "./shared/delete-dialog/delete-dialog.component";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {AboutProductComponent} from "./components/about-product/about-product.component";
import {CartComponent} from "./pages/cart/cart.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProductsHeaderComponent } from './pages/product-page/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import { ProductTableComponent } from './components/product-table/product-table.component';
import { InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";


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
    ProductsHeaderComponent,
    FiltersComponent,
    ProductTableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    InputTextModule,
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
