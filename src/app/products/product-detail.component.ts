import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import {  IProduct} from './products.interface';
import { FavoriteService,ProductService } from './';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    @Input() product:IProduct;
    @Output() addedToFavorites= new EventEmitter<IProduct>();
    //product:IProduct;
    constructor(private _favoriteService:FavoriteService,private _router :ActivatedRoute,private _product:ProductService) { }
addToFavorites(product:IProduct){
this.addedToFavorites.emit(product);
this._favoriteService.addTofavorites(product);
}
    ngOnInit() { 
        let id = this._router.snapshot.params['id'];
        this.product = this._product.getProductsByid(id);
    }
}