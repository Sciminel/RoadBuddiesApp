import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TripComponent } from './trip/trip.component';
import { PLayoutComponent } from './p-layout/p-layout.component';

const routes: Routes = [

  {
    path: '', component: PLayoutComponent, children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent },
      { path: 'trip', component: TripComponent },
      { path: 'contact', component: ContactComponent }
    
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
