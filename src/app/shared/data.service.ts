import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
     {
      id: 1, 
      name: 'Egg',
      category: 'Food',
      description: 'Lorem Egg',
      price: 1,
      img: '/assets/img/eggs.jpg',
    },
    {
      id: 2, 
      name: 'Bacon',
      category: 'Food',
      description: 'Lorem Bacon',
      price: 2,
      img: '/assets/img/bacon.jpg',
    },
    {
      id: 3, 
      name: 'Meat',
      category: 'Food',
      description: 'Lorem Meat',
      price: 10,
      img: '/assets/img/meat.jpg',
    },
    {
      id: 4, 
      name: 'Sausage',
      category: 'Food',
      description: 'Lorem Sausage',
      price: 5,
      img: '/assets/img/sausage.jpg',
    },
 ];

 getProducts(){
   return this.products;
 }
 getProductById(id){
   return this.products.filter((product) => product.id == id);
 }
}
