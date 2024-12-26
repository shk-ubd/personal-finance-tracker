import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    },
];
