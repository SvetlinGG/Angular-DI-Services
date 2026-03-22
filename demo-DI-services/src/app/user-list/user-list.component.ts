import { Component, Input } from '@angular/core';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserListItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input('users') usersList = [];
}
