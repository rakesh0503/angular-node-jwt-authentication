import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [{ path: '', component: NewArrivalComponent }],
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
