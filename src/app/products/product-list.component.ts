import {Component,OnInit} from '@angular/core';
import { IProduct } from './products.interface';
import { Router } from '@angular/router';
import {ProductService,FavoriteService } from './';
import { Observable } from 'rxjs/Observable';
@Component(
{
    selector:'product-list',
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
    
}
)

export class ProductListComponent implements OnInit{ // have component as the suffix - good practice
 title:string="Products";
 products:IProduct[];
 selectedProduct:IProduct;
 message:string;
 sorter:string ="-price";
 product$:Observable<IProduct[]>;
 ngOnInit() 
 {
     this.product$ = this._productService.getProducts();
    //   this._productService.getProducts().subscribe(
    //       data=>this.products = data,
    //       error=> console.log(error)
    //   );
 }
 onSort() 
 {
     if(this.sorter == "-price") {
        this.sorter ="price";
     }
     else
     {
         this.sorter = "price";
     }
     
 }
 onSelect(product:IProduct) {
this.selectedProduct =product;
this._routing.navigateByUrl('/products/'+product.id);
 }
get favoriteNb() {
    return this._favoriteService.NofProducts;
}
 newFavorites(product:IProduct){
    this.message = `Product ${product.name} added to your favorites!`;
}
 // dependency injection 
 constructor(private _productService : ProductService , private _favoriteService :FavoriteService,private _routing: Router)  {
             
 }
}