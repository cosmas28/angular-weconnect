import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { BusinessListModule } from './business-list/business-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'signup', pathMatch: 'full' }
    ]),
    SignupModule,
    LoginModule,
    BusinessListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
