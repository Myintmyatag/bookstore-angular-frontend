import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product.model';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  bookId;

  product:Product;

  constructor(private route:ActivatedRoute,private productService:ProductService,
              private cartService:CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.bookId = parseInt(param.get('id'))
    });

    this.productService.getProduct(this.bookId)
      .subscribe(data=>{
        this.product = data
      })
    }

    addToCart(book){
      this.cartService.addToCart(book);
    }

    public getCarts(){
    return this.cartService.getCarts();
    }
}
