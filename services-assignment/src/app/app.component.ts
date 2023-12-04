import { Component } from '@angular/core';
// import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [UsersService],
})
export class AppComponent {
  activeUsers: string[] = ['Nguyễn Tuấn Anh', 'Cường', 'Tài Lê'];
  inactiveUsers: string[] = ['Sáu Bảnh', 'Cường Wibu', "TaiLe's"];

  onUserSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  onUserSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
