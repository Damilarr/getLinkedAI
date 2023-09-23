import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { JudgeCriteriaComponent } from './components/judge-criteria/judge-criteria.component';
import { RulesComponent } from './components/rules/rules.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeroComponent } from './components/hero/hero.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { TypwriterComponent } from './components/typwriter/typwriter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    RegisterComponent,
    ButtonComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    JudgeCriteriaComponent,
    RulesComponent,
    IntroComponent,
    HeroComponent,
    TimelineComponent,
    RewardsComponent,
    PrivacyComponent,
    SponsorComponent,
    TypwriterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
