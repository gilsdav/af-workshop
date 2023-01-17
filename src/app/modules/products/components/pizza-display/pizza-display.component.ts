import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models';

@Component({
  selector: 'app-pizza-display',
  templateUrl: './pizza-display.component.html',
  styleUrls: ['./pizza-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaDisplayComponent implements OnInit {

  @Input() pizza?: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
