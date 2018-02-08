import { Component, OnInit } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public pizzas: Pizza[];

  constructor(private pizzasService: PizzasService) { }

  ngOnInit() {
    this.pizzasService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }

}
