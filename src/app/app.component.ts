import {Component} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers: any[] = [];
  locations: any[] = [];
  ramOptions: any[] = [];
  loading: boolean = true; // Add a loading flag

  filters = {
    location: '',
    hddType: '',
    ramCapacity: [] as any[],
    hddCapacity: ''
  };


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/server`).subscribe(response => {
      this.servers = response.servers;
      this.locations = response.locations;
      this.ramOptions = response.ramOptions;
      this.loading = false; // Set loading to false when the data is fetched
    }, error => {
      console.error(error);
      this.loading = false; // Set loading to false even if an error occurs
    });
  }

  ramSelectionUpdated($event: any[]) {
    this.filters.ramCapacity = $event;
    this.updateServers();
  }

  onStorageRangeChanged($event: { min: number; max: number }) {
    this.filters.hddCapacity = $event.min + '-' + $event.max;
    this.updateServers();
  }

  onStorageTypeSelected($event: string) {
    this.filters.hddType = $event;
    this.updateServers();
  }

  onLocationSelected($event: string) {
    this.filters.location = $event;
    this.updateServers();
  }

  updateServers() {
    let filterParams = new HttpParams();
    if (this.filters.location !== '') {
      filterParams = filterParams.set('location', this.filters.location);
    }
    if (this.filters.hddType !== '') {
      filterParams = filterParams.set('hdd_type', this.filters.hddType);
    }
    if (this.filters.ramCapacity.length > 0) {
      filterParams = filterParams.set('ram_capacity', this.filters.ramCapacity.join(','));
    }
    if (this.filters.hddCapacity !== '') {
      filterParams = filterParams.set('hdd_capacity', this.filters.hddCapacity);
    }

    this.http.get<any>(`${environment.apiUrl}/server`, {params: filterParams}).subscribe(response => {
      this.servers = response.servers;
    });
  }

  orderServers($event: [string, string]) {
    let orderParams = new HttpParams();
    orderParams = orderParams.set('order_by', $event[0]);
    orderParams = orderParams.set('order', $event[1]);
    this.http.get<any>(`${environment.apiUrl}/server`, {params: orderParams}).subscribe(response => {
        this.servers = response.servers;
      }
    );
  }
}
