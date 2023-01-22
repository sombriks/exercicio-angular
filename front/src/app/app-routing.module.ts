import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { SetoresComponent } from './pages/setores/setores.component';

const routes: Routes = [
  { path:"login", component: LoginComponent, title: "Login" },
  { path:"pessoas", component: PessoasComponent, title: "Pessoas" },
  { path:"setores", component: SetoresComponent, title: "Setores" },

  { path: "", redirectTo: "/login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
