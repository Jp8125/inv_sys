import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { RecentlyDeletedComponent } from './recently-deleted/recently-deleted.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './product/add/add.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, DashboardComponent, ProductComponent, SignInComponent, RegisterComponent, RecentlyDeletedComponent, HeaderComponent, AddComponent, LandingPageComponent],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
