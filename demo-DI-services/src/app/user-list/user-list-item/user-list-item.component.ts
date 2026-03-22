import { Component, Input } from '@angular/core';
import { SimpleUser } from '../../types';

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {
  @Input('user') user: SimpleUser | null = null;
}
