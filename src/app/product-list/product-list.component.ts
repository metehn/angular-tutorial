import {Component} from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //name = 'Test'
  product = {
    name: 'Iphone',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 11,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100.0)
  }

  onNameChange(event: any) {
    //console.log(event.target.value)
    //this.name = event.target.value
  }
}
