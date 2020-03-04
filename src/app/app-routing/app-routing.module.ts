import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard } from '../guard/auth/auth.guard';

import { HomeComponent } from '../components/home/home.component';
import { HollywoodComponent } from '../components/hollywood/hollywood.component';
import { BollywoodComponent } from '../components/bollywood/bollywood.component';
import { AnimatedComponent } from '../components/animated/animated.component';
import { SeriesComponent } from '../components/series/series.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { MovieComponent } from '../components/movie/movie/movie.component';
import { HboComponent } from '../components/hbo/hbo.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'hollywood', component: HollywoodComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'bollywood', component: BollywoodComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'animated', component: AnimatedComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: 'series', component: SeriesComponent, canActivate: [AuthGuard], children: [
		{ path: 'HBO', component: HboComponent},
		{ path: 'YouTube', component: YoutubeComponent}
	]},
	{ path: 'login', component: LoginComponent, pathMatch: 'full'},
	{ path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
	{ path: 'movie/:name/:id', component: MovieComponent, canActivate: [AuthGuard], pathMatch: 'full'},
	{ path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [
  	{ provide: LocationStrategy, useClass: HashLocationStrategy },
  	AuthGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
