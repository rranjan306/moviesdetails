import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeComponent } from '../components/home/home.component';
import { HollywoodComponent } from '../components/hollywood/hollywood.component';
import { BollywoodComponent } from '../components/bollywood/bollywood.component';
import { AnimatedComponent } from '../components/animated/animated.component';
import { SeriesComponent } from '../components/series/series.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent, pathMatch: 'full'},
	{ path: 'hollywood', component: HollywoodComponent, pathMatch: 'full'},
	{ path: 'bollywood', component: BollywoodComponent, pathMatch: 'full'},
	{ path: 'animated', component: AnimatedComponent, pathMatch: 'full'},
	{ path: 'series', component: SeriesComponent, pathMatch: 'full'},
	{ path: 'login', component: LoginComponent, pathMatch: 'full'},
	{ path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
	{ path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
