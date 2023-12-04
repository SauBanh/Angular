import { Component } from '@angular/core';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css',
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  // @Input() users: string[];
  // @Output() userSetToInactive: EventEmitter<number> =
  //   new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
}
