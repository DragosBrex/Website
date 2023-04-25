import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {MyproductsComponent} from "./myproducts/myproducts.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
    {path: '',component:ProductPageComponent },
    { path:'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'myproducts', component: MyproductsComponent },
    { path: 'products', component: ProductPageComponent },
    { path: 'products/:productId', component: ProductComponent },
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
