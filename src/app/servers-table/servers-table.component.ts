import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html',
  styleUrls: ['./servers-table.component.scss']
})
export class ServersTableComponent {
  servers: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://leaseweb.test/server').subscribe(servers => {
      console.log(servers);
      this.servers = servers;
    });

  }

  sortServers(sortBy: string): void {
    this.servers.sort((a, b) => a[sortBy] - b[sortBy]);
  }

}
