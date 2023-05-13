import {Component} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers: any[] = [];
  filteredServers: any[] = [];
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
      this.filteredServers = response.servers;
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
    // Copy the original servers array to the filteredServers array
    this.filteredServers = this.servers.slice();

    // Apply each filter conditionally
    if (this.filters.location !== '') {
      this.filteredServers = this.filteredServers.filter(server => {
        return server.location.includes(this.filters.location);
      });
    }

    if (this.filters.hddType !== '') {
      this.filteredServers = this.filteredServers.filter(server => {
        return server.hdd_type.includes(this.filters.hddType);
      });
    }

    if (this.filters.ramCapacity.length > 0) {
      this.filteredServers = this.filteredServers.filter(server => {
        return this.filters.ramCapacity.includes(server.ram_capacity);
      });
    }

    if (this.filters.hddCapacity !== '') {
      const [min, max] = this.filters.hddCapacity.split('-');
      this.filteredServers = this.filteredServers.filter(server => {
        return server.hdd_capacity >= Number(min) && server.hdd_capacity <= Number(max);
      });
    }
  }

}
