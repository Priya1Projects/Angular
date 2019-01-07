import { Injectable } from '@angular/core';
import { IProduct } from './products.interface';
@Injectable()
export class FavoriteService {
    
private favorites:Set<IProduct> = new Set<IProduct>();


addTofavorites(product:IProduct) :void{
this.favorites.add(product);
}

get NofProducts():number
{
return this.favorites.size;
}
    constructor() { }
}