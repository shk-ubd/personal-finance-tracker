import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { SignupComponent } from './presentation/signup/signup.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';

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
    {
        path: 'signup',
        pathMatch: 'full',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent
    }
];
