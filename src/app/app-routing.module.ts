import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
    },
    {
        path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
    },
    { path: '**', redirectTo: 'products' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
