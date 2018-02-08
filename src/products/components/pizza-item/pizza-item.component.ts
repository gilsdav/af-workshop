import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: any;

  constructor() { }

  ngOnInit() {
  }

}
