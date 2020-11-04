import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  public product;
  public totalPrice;
  constructor(private route: ActivatedRoute, private dataSvc: DataService, private location: Location) {}
  changePrice = (event:any) => {
    this.totalPrice = this.product.price * event.target.value;
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
    this.totalPrice = this.product.price;
  }
  
  onGoBack(): void{
    this.location.back();
  }
}
