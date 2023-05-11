import {Component} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers: any[] = [];
  locations: any[] = [];
  ramOptions: any[] = [];

  filters = {
    location: '',
    hddType: '',
    ramCapacity: [] as any[],
    hddCapacity: ''
  };


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('http://leaseweb.test/server').subscribe(response => {
      this.servers = response.servers;
      this.locations = response.locations;
      this.ramOptions = response.ramOptions;
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

    this.http.get<any>('http://leaseweb.test/server', {params: filterParams}).subscribe(response => {
      this.servers = response.servers;
    });
  }
}
