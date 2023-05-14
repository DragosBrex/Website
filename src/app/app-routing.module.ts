import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {MyproductsComponent} from "./pages/myproducts/myproducts.component";
import {ProductComponent} from "./components/product/product.component";
import { RoleGuardGuard } from './guards/role-guard.guard';
import {SellerPageComponent} from "./pages/seller-page/seller-page.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import { AboutProductComponent } from './components/about-product/about-product.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
    { path: '', component:ProductPageComponent },
    { path: 'home',component:ProductPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'cart', component: CartComponent},
    { path: 'myproducts', component: MyproductsComponent, canActivate: [RoleGuardGuard], data: { role: ['Seller']} },
    { path: 'seller/page', component: SellerPageComponent, canActivate: [RoleGuardGuard], data: { role: ['Seller']} },
    { path: 'add-product', component: AddProductComponent, canActivate: [RoleGuardGuard], data: { role: ['Seller']} },
    { path: 'admin/page', component: AdminPageComponent, canActivate: [RoleGuardGuard], data: { role: ['Admin']} },
    { path: 'products/:productId', component: AboutProductComponent },
    {
        path: '**',
        component: NotFoundComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
