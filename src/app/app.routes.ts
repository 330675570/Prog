import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
