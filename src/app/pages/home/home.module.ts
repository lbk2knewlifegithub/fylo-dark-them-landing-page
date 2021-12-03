import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureCardComponent } from './features/feature-card/feature-card.component';
import { FeaturesComponent } from './features/features.component';
import { GetEarlyAccessComponent } from './get-early-access/get-early-access.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { StayProductiveComponent } from './stay-productive/stay-productive.component';
import { TestimonialCardComponent } from './testimonials/testimonial-card/testimonial-card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
  declarations: [
    HomeComponent,
    IntroComponent,
    StayProductiveComponent,
    // features
    FeaturesComponent,
    FeatureCardComponent,
    // testimonials
    TestimonialCardComponent,
    TestimonialsComponent,
    GetEarlyAccessComponent,
  ],
})
export class HomeModule {}
