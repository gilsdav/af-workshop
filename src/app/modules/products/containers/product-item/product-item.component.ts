import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, merge, Observable, of, shareReplay, skip, switchMap } from 'rxjs';

import { ConfirmModalComponent } from '../../components';
import { Pizza } from '../../models';
import { PizzasService, ToppingsService } from '../../services';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {

    public pizza$: Observable<Pizza>;
    public editedPizza$ = new BehaviorSubject<Pizza | null>(null);
    public currentPizzaState$: Observable<Pizza | null>;
    public toppings$: Observable<string[]>;

    constructor(
        private pizzasService: PizzasService,
        toppingsService: ToppingsService,
        route: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.toppings$ = toppingsService.getToppings();
        this.pizza$ = route.params.pipe(
            switchMap(params => {
                const basePizza: Pizza = { name: '', toppings: [] };
                if (params['id'] && params['id'] !== 'new') {
                    // return pizzasService.getPizzas().pipe(
                    //     map(pizzas => pizzas.find(p => p.id === +params['id']) ?? basePizza)
                    // );
                    return pizzasService.getPizza(+params['id']);
                } else {
                    return of(basePizza);
                }
            }),
            shareReplay({ refCount: true, bufferSize: 1 })
        );
        this.currentPizzaState$ = merge(
            this.pizza$,
            this.editedPizza$.pipe(skip(1))
        );
    }

    public onEdit(event: Pizza) {
        this.editedPizza$.next(event);
    }

    public onCreate(event: Pizza) {
        this.pizzasService.createPizza(event).subscribe(() => {
            this.router.navigate(['/products']);
        });
    }

    public onUpdate(event: Pizza) {
        this.pizzasService.updatePizza(event).subscribe(() => {
            this.router.navigate(['/products']);
        });
    }

    public onRemove(event: Pizza) {
        const dialogRef = this.dialog.open(ConfirmModalComponent, { data: event });
        dialogRef.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.pizzasService.removePizza(event).subscribe(() => {
                    this.router.navigate(['/products']);
                });
            }
        })
    }

}
