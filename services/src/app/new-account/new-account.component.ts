import { AccountsService } from './../accounts.service';
// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  // providers: [LoggingService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    // const service = new LoggingService(); // not do this
    // service.logStatusChange(accountStatus); // not do this
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
