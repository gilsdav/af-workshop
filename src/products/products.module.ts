import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { containers } from './containers';
import { components } from './components';
import { services } from './services';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
  ],
  declarations: [...containers, ...components],
  providers: [...services]
})
export class ProductsModule { }
