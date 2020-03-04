import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//3rd Party Libaray
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Services
import { ImageGetterService } from './services/image-getter/image-getter.service';
import { MoviesService } from './services/movies/movies.service';
import { InterceptorService} from './services/interceptor/interceptor.service';
import { AuthService} from './services/auth/auth.service';
import { RegistrationService} from './services/registration/registration.service';

//Custom NgModule
import { AppRoutingModule } from './app-routing/app-routing.module';

//Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { HollywoodComponent } from './components/hollywood/hollywood.component';
import { BollywoodComponent } from './components/bollywood/bollywood.component';
import { AnimatedComponent } from './components/animated/animated.component';
import { SeriesComponent } from './components/series/series.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UppercasePipe } from './pipes/uppercase/uppercase.pipe';
import { MovieComponent } from './components/movie/movie/movie.component';
import { HboComponent } from './components/hbo/hbo.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ShadowDirective } from './directives/shadow/shadow.directive';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CarouselComponent,
    GallaryComponent,
    HollywoodComponent,
    BollywoodComponent,
    AnimatedComponent,
    SeriesComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    UppercasePipe,
    MovieComponent,
    HboComponent,
    YoutubeComponent,
    AppFooterComponent,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ImageGetterService,
    MoviesService,
    AuthService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
