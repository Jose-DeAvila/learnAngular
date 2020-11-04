import {Component, Input} from '@angular/core';

@Component({
   selector: 'app-product',
   template: `<div class="product-img" style="text-align: center; width: 100%">
        <img class="productImage" style="width: 100%;" [src]="[product.img]" alt="{{product.name}}">
      </div>
      <div class="product-details d-flex" style="justify-content: space-between; align-items: center;">
	<div class="product-info">
	  <h2 style="margin: 0;"><a [routerLink]="['/product', product.id]">{{product.name}}</a></h2>
          <div style="font-size: 1.6rem; font-weight: bold; padding: 0;">&#36;{{product.price}}</div>
	</div>
	<div><a class="btn btn-primary" style="width: 50px; height: 50px; padding: 5px;" [routerLink]="['/product', product.id]"><img class="shopping-bag" style="width: 100%" [src]="['/assets/img/add-to-cart.svg']" alt="Add To Cart Button"></a></div>
      </div>`,
})

export class ProductComponent {
   @Input() product;
}
