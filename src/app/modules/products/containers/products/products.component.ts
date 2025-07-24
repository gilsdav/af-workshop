import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Pizza } from '../../models/pizza.model';
import { PizzasService, AccessService } from '../../services';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ProductsComponent implements OnInit {

    public pizzas$: Observable<Pizza[]>;

    constructor(private pizzasService: PizzasService, private accessService: AccessService) {
        this.pizzas$ = this.pizzasService.getPizzas();
    }

    ngOnInit(): void {
        this.accessService.canAccess = true;
    }

}
