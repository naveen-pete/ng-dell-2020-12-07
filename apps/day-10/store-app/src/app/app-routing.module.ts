import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductFormComponent } from "./products/product-form/product-form.component";
import { ProductsComponent } from "./products/products.component";

// http://localhost:4200 - HomeComponent
// http://localhost:4200/products - ProductsComponent
// http://localhost:4200/products/new - ProductFormComponent
// http://localhost:4200/products/10 - ProductDetailComponent
// http://localhost:4200/products/10/edit - ProductFormComponent
// http://localhost:4200/sign-up - SignUpComponent
// http://localhost:4200/login - LoginComponent

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'new', component: ProductFormComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductFormComponent },
    ]
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  // Solution #1
  { path: '**', component: NotFoundComponent }

  // Solution #2
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }