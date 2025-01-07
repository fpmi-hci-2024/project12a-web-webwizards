import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'storefront', pathMatch: 'full' },
      { 
        path: 'storefront', 
        loadChildren: () => import('./features/home/pages/storefront/storefront.module').then(m => m.StorefrontModule) 
      },
      { 
        path: 'product', 
        loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
      },
      // Добавьте другие маршруты здесь при необходимости
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
