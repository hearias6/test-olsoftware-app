import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  entryComponents:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
