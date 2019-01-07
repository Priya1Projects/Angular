import { NgModule } from '@angular/core';
import {  ProductDetailComponent} from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { OrderBy } from '../shared/orderBy.pipe';
import {CommonModule  } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {  routing} from './product.routing';
import { ProductService,FavoriteService } from './';
import { ProductInsertComponent } from './product-insert.component';

@NgModule({
    imports: [CommonModule,FormsModule,routing,ReactiveFormsModule],
    exports: [ProductListComponent],
    declarations: [ProductDetailComponent,ProductListComponent,OrderBy,ProductInsertComponent],
    // provide it in the module to be injected in the components 
    providers: [ProductService,FavoriteService]
})

export default class ProductsModule { }
