import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Pizza } from '../../models';

@Component({
    selector: 'app-pizza-form',
    templateUrl: './pizza-form.component.html',
    styleUrls: ['./pizza-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaFormComponent implements OnInit {

    public exists = false;

    public form = new FormGroup({
        name: new FormControl('', Validators.required),
        toppings: new FormControl<string[]>([])
    });

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
        this.form.valueChanges.subscribe(newPizza => {
            this.pizza = {
                ...this.pizza,
                name: newPizza.name!,
                toppings: newPizza.toppings!
            };
            this.edit.emit(this.pizza);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['pizza']) {
            this.form.setValue({
                name: this.pizza?.name ?? '',
                toppings: this.pizza?.toppings ?? []
            });
        }
    }

    public createPizza(): void {
        this.create.emit(this.pizza!);
    }

    public updatePizza(): void {
        this.update.emit(this.pizza!);
    }

    public deletePizza(): void {
        this.remove.emit(this.pizza!);
    }

}
