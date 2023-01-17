import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { containers } from './containers';
import { components } from './components';
import { services } from './services';
import { guards } from './guards';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        ...containers,
        ...components
    ],
    providers: [
        ...services,
        ...guards
    ]
})
export class ProductsModule { }
