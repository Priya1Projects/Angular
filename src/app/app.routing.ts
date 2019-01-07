import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home.component';
import { ContactComponent } from './shared/contact.component';


const routes: Routes = [
    {path:'',redirectTo:'/home' ,pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
{ path: 'products', loadChildren:'app/products/products.module' },

  {path:'**',component:HomeComponent}
];


export class NameRoutingModule { }

export const routing= RouterModule.forRoot(routes)