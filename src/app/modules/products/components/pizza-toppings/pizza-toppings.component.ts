import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PizzaToppingsComponent implements ControlValueAccessor {

    constructor() { }

    writeValue(toppings: string[]): void {
        // TODO
    }

    private onChange = (toppings: string[]) => {};
    private onTouch = () => {};

    registerOnChange(fn: (toppings: string[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

}
