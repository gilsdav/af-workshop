import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductsRoutingModule } from './products-routing.module';
import { containers } from './containers';
import { components } from './components';
import { services } from './services';
import { guards } from './guards';

@NgModule({
    declarations: [
        ...containers,
        ...components
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        ...services,
        ...guards
    ]
})
export class ProductsModule { }
