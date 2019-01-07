import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ProductService } from './product.service';
import {Router  } from '@angular/router';
@Component({
    templateUrl: 'product-insert.component.html'
})
export class ProductInsertComponent implements OnInit {
    insertForm:FormGroup;
    name:FormControl;
    price:FormControl;
    description:FormControl;
    
    constructor(private _formBuilder : FormBuilder,private _product : ProductService,private _router: Router) { }
   onSubmit()
   {
console.log(this.insertForm.value);
this._product.insertProduct(this.insertForm.value);
this._router.navigateByUrl('products');
   }
    ngOnInit() { 
        this.name = new FormControl(
            '',[Validators.required]
        )
         this.price = new FormControl(
            '',[Validators.required]
        )
         this.description = new FormControl(
            '',[Validators.minLength(3)],Validators.maxLength(50)
        )
       this.insertForm = this._formBuilder.group(
           {
'name' : this.name,
'price': this.price,
'description':this.description
           }
       );
    }
}