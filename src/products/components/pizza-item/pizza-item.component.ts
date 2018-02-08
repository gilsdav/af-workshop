import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: any;

  constructor() { }

  ngOnInit() {
  }

}
