import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { containers } from './containers';
import { components } from './components';
import { services } from './services';

@NgModule({
    declarations: [
        ...containers,
        ...components
    ], imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    providers: [
        ...services,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class ProductsModule { }
