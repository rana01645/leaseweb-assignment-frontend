import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers: any[] = [];
  locations: any[] = [];
  ramOptions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://leaseweb.test/server').subscribe(response => {
      this.servers = response.servers;
      this.locations = response.locations;
      this.ramOptions = response.ramOptions;
    });
  }
}
