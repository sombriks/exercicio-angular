import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { SetoresComponent } from './pages/setores/setores.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {TabMenuModule} from "primeng/tabmenu";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PessoasComponent,
    SetoresComponent,
    SidebarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TabMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
