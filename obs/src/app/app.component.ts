import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userActived = false;
  private activateSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activateSub = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActived = didActivate;
      }
    );
  }

  onDestroy() {
    this.activateSub.unsubscribe();
  }
}
