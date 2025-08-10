import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "users", component: UsersComponent},
    {path: "users/details/:id", component: UserDetailsComponent},
];
