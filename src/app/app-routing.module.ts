import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginModuleComponent} from './login-module/login-module.component'
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component'
import {ResetPasswordComponent} from './reset-password/reset-password.component'
import {DashboardComponent} from './dashboard/dashboard.component';
import {PartnersComponent} from './partners/partners.component';
import { PartnerTransactionsComponent } from './partner-transactions/partner-transactions.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
{ path: '', component: LoginModuleComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'reset-password', component: ResetPasswordComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'partners', component: PartnersComponent },
{ path: 'partner-transaction', component: PartnerTransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
