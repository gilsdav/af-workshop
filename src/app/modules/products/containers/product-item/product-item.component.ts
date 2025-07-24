import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, merge, Observable, of, skip } from 'rxjs';
import { Pizza } from '../../models';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ProductItemComponent {

  public pizza$: Observable<Pizza>;
  public editedPizza$ = new BehaviorSubject<Pizza | null>(null);
  public currentPizzaState$: Observable<Pizza | null>;
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
      this.currentPizzaState$ = merge(
        this.pizza$,
        this.editedPizza$.pipe(skip(1))
      );
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
