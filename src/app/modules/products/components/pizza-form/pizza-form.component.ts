import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pizza } from '../../models';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaFormComponent implements OnInit {

  public exists = false;

  @Input()
  public pizza?: Pizza | null;
  @Input()
  public toppings?: string[] | null;

  @Output()
  private edit = new EventEmitter<Pizza>();
  @Output()
  private create = new EventEmitter<Pizza>();
  @Output()
  private update = new EventEmitter<Pizza>();
  @Output()
  private remove = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit() {
  }

}
