import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html',
  styleUrls: ['./servers-table.component.scss']
})
export class ServersTableComponent {
  @Input() servers: any[] = [];
  @Input() loading: boolean = true;

  constructor(private http: HttpClient) {
  }

  sortServers(sortBy: string): void {
    this.servers.sort((a, b) => a[sortBy] - b[sortBy]);
  }

}
