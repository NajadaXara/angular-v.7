import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './services/token.interceptor';
import { LoginComponent } from './components/login';
import { HomeComponent } from './components/home';
import { LeavesComponent } from './components/leaves';
import { UsersComponent } from './components/users';

import { SearchFilterPipe } from './search-filter.pipe';

import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { AlertComponent } from './directives/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LeavesComponent,
    UsersComponent,
    SearchFilterPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, AuthGuard, AlertService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
