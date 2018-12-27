import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { keymap: 'ctrl+m' } },
  { path: 'dashboard', component: DashboardComponent, data: { keymap: 'ctrl+d' } },
  { path: 'profile', component: ProfileComponent, data: { keymap: 'ctrl+k' } },
  { path: 'about', component: AboutComponent, data: { keymap: 'ctrl+b' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
