import { BehaviorSubject } from 'rxjs';
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-pizza-toppings',
    templateUrl: './pizza-toppings.component.html',
    styleUrls: ['./pizza-toppings.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PizzaToppingsComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaToppingsComponent implements ControlValueAccessor {

    @Input() allToppings: string[] = [];
    public selectedToppings$ = new BehaviorSubject<{[key: string]: boolean}>({});

    constructor() { }

    writeValue(toppings: string[]): void {
        this.selectedToppings$.next(toppings.reduce((result, item) => {
            result[item] = true;
            return result;
        }, {} as {[key: string]: boolean}));
    }

    private onChange = (toppings: string[]) => {};
    private onTouch = () => {};

    registerOnChange(fn: (toppings: string[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    public toggleItem(topping: string): void {
        const currentSelection = this.selectedToppings$.getValue();
        const newSelection = {
            ...currentSelection,
            [topping]: !currentSelection[topping]
        };
        this.selectedToppings$.next(newSelection);
        const newSelectionArray: string[] = [];
        Object.keys(newSelection).forEach(key => {
            if (newSelection[key]) {
                newSelectionArray.push(key);
            }
        });
        this.onChange(newSelectionArray);
    }

}
