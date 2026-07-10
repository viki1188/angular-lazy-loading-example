import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { EmployeeList } from './features/employees/employee-list/employee-list';
import { ProductList } from './features/products/product-list/product-list';
import { Settings } from './features/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [

        // With lazy loading
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'employees',
        loadComponent: () => import('./features/employees/employee-list/employee-list').then((m) => m.EmployeeList),
      },
      {
        path: 'products',
        loadComponent: () => import('./features/products/product-list/product-list').then((m) => m.ProductList),
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    // Without lazy loading

    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    //   },

    //   {
    //     path: 'dashboard',
    //     component: Dashboard
    //   },

    //   {
    //     path: 'employees',
    //     component: EmployeeList
    //   },

    //   {
    //     path: 'products',
    //     component: ProductList
    //   },

    //   {
    //     path: 'settings',
    //     component: Settings
    //   }

    ],
  },
];
