import { Component, OnInit, Input } from '@angular/core';

import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-display',
  templateUrl: './pizza-display.component.html',
  styleUrls: ['./pizza-display.component.scss']
})
export class PizzaDisplayComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
