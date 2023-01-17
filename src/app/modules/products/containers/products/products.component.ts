import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

    public pizzas$: Observable<Pizza[]>;

    constructor(private pizzasService: PizzasService) {
        this.pizzas$ = this.pizzasService.getPizzas();
    }

    ngOnInit() {
    }

}
