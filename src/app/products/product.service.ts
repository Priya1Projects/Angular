import { Injectable } from '@angular/core';
import { IProduct } from './products.interface';
import { Http , Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'  // imports the whole library

@Injectable()
export class ProductService {
    private apiEndPointString :string = "http://storerestservice.azurewebsites.net/api/products/"
    products : IProduct[];
    apiEndpoint:string="";
    constructor(private _http :Http) { 

    }

        insertProduct(newProduct:IProduct){
        newProduct.modifiedDate = new Date();

        let h = new Headers();
        h.append('Content-Type', 'application/json');

        this._http
            .post(
                this.apiEndPointString,
                JSON.stringify(newProduct),
                { headers:h })
            .map(res => res.json())
            .subscribe(
                data => this.products.push(data),
                error => console.log(error)
            );

    }
getProductsByid(id:number): IProduct
{
    if(this.products !== undefined)
return this.products.filter(p=> p.id== id)[0];
}
    getProducts():Observable<IProduct[]>{
if(this.products)
{
    //local cache
    return Observable.of(this.products);
}
else
{
    // get products from server
    return this._http
    .get(this.apiEndPointString)
    .map(res=>{
    this.products =res.json();
    return this.products;
    });
    }
    }
}