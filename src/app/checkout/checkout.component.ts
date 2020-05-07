import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService:CartService) { }

  totalPrice:number = 0;

  products:Product[]=[];

  ngOnInit(): void {
    this.products = this.cartService.getCarts();
    this.products.forEach(value => {
      this.totalPrice += value.price;
    });
    console.log(this.totalPrice)
  }



}
