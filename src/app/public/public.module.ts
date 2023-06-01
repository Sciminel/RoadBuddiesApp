import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TripComponent } from './trip/trip.component';
import { PublicRoutingModule } from './public-routing.module';
import { PHeaderComponent } from './p-header/p-header.component';
import { PLayoutComponent } from './p-layout/p-layout.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    TripComponent,
    PHeaderComponent,
    PLayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
