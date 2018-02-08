import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public pizza: Pizza;
  public editedPizza: Pizza;
  public toppings: string[];

  constructor() {
  }

  ngOnInit() {
    this.toppings = [
      'olive',
      'bacon'
    ];
    this.pizza = <Pizza> {
      id: 1,
      name: 'test',
      toppings: [
        'olive',
        'bacon'
      ]
    };
    this.editedPizza = this.pizza;
  }

  public onEdit(event: Pizza) {
  }

  public onCreate(event: Pizza) {
  }

  public onUpdate(event: Pizza) {
  }

  public onRemove(event: Pizza) {
  }

}
