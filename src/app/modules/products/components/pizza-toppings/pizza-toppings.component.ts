import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaToppingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
