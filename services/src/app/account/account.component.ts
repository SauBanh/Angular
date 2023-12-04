import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New status ' + status)
    );
  }
  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
