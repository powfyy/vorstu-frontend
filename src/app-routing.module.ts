import { LoginComponent } from './app/auth/login/login.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablestylingComponent } from './app/components/tablestyling/tablestyling.component';

const routes: Routes = [

  {path: 'table', component: TablestylingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup',component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
