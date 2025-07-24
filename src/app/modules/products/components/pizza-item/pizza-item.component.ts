import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models';

@Component({
    selector: 'app-pizza-item',
    templateUrl: './pizza-item.component.html',
    styleUrls: ['./pizza-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PizzaItemComponent implements OnInit {

    @Input() pizza!: Pizza;

    constructor() { }

    ngOnInit() {
    }

}
