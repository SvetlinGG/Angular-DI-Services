import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './users/users.guard';

export const routes: Routes = [
    {path: "", redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: "users", component: UsersComponent, canActivate: [AuthGuard]},
    {path: "users/details/:id", component: UserDetailsComponent},
    {path: '**', component: ErrorPageComponent}
];
