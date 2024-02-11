import {Component} from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  addToCard : number = 0;
  product = {
    name: 'Iphone',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100.0)
  }

  decreseCartValue() {
    if(this.addToCard > 0){
      this.addToCard--;
    }
  }

  increaseCartValue() {
    if(this.addToCard < this.product.inStock && this.addToCard < 10){
      this.addToCard++;
    }
  }
}
