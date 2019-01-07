import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent, } from './product-detail.component';
import { ProductInsertComponent } from './product-insert.component';
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'insert', component: ProductInsertComponent },
  { path: ':id', component: ProductDetailComponent },
  //{path:'**',component:HomeComponent}
];



export const routing= RouterModule.forChild(routes)