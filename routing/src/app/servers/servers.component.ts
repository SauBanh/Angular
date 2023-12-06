import { Component } from '@angular/core';
import { ServersService } from './servers.service';
// import { ActivatedRoute, Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router
  ) // private route: ActivatedRoute
  {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
    this.router.navigate(['servers']);
  }
}
