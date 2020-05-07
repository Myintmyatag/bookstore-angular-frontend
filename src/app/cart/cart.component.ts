import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Product} from '../product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:Product[] = [];

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.products = this.cartService.getCarts();
  }

  public clearCart(){
    this.cartService.clearCart();
    this.router.navigate(['product'])
  }

  isCartExist(){
    return (this.products.length > 0);
  }


}
