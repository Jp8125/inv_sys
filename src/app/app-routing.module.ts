import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './product/add/add.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateOrdersComponent } from './orders/create-orders/create-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:LandingPageComponent},
  { path: 'sign-in', component:SignInComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'products', component: ProductComponent ,canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {path:'add',component:AddProductComponent,canActivate:[AuthGuard]},
  {path:'orders',component:CreateOrdersComponent,canActivate:[AuthGuard]},
  {path:'order-list',component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'about-us',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
