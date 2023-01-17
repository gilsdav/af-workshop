import { PizzasService } from './pizzas.service';
import { ToppingsService } from './toppings.service';
import { AccessService } from './access.service';

export const services = [
    PizzasService,
    ToppingsService,
    AccessService
];

export * from './pizzas.service';
export * from './toppings.service';
export * from './access.service';
