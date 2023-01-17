import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Pizza } from '../../models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {

  public pizza$: Observable<Pizza>;
  public editedPizza$ = new BehaviorSubject<Pizza | null>(null);
  public toppings$: Observable<string[]>;

  constructor() {
    this.toppings$ = of([
        'olive',
        'bacon'
      ]);
      this.pizza$ = of({
        id: 1,
        name: 'test',
        toppings: [
          'olive',
          'bacon'
        ]
      });
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
