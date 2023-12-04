import { Component } from '@angular/core';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css',
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  // @Input() users: string[];
  // @Output() userSetToIActive: EventEmitter<number> = new EventEmitter<number>();

  // onSetToActive(id: number) {
  //   this.userSetToIActive.emit(id);
  // }
}
