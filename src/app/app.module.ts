import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//3rd Party Libaray
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Services
import{ ImageGetterService } from './services/image-getter/image-getter.service';
import{ MoviesService } from './services/movies/movies.service';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [ImageGetterService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
