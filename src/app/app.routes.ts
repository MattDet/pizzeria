import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalNoticesComponent } from './pages/legal-notices/legal-notices.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'legal-notices', component: LegalNoticesComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', component: NotFoundComponent },
  ];
