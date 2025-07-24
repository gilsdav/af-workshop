import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ProductsComponent {

    public pizzas$: Observable<Pizza[]>;

    constructor(private pizzasService: PizzasService) {
        this.pizzas$ = this.pizzasService.getPizzas();
    }

}
