import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/nav/footer/footer.component';
import { MobileNavbarComponent } from './components/nav/mobile-navbar/mobile-navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SolutionsModule } from './modules/solutions/solutions.module';
import { ServicesModule } from './modules/services/services.module';
import { BannerComponent } from './components/banner/banner.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { BlogModule } from './modules/blog/blog.module';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectFeedComponent } from './components/project-feed/project-feed.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { JoinTeamComponent } from './components/join-team/join-team.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MobileNavbarComponent,
    NotFoundComponent,
    BannerComponent,
    NewsFeedComponent,
    ContactComponent,
    NavbarComponent,
    HeroComponent,
    ProjectFeedComponent,
    TestimonialsComponent,
    JoinTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutes,
    RouterModule,
    SolutionsModule,
    ServicesModule,
    BlogModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
