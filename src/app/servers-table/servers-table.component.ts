import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html',
  styleUrls: ['./servers-table.component.scss']
})
export class ServersTableComponent {
  @Input() servers: any[] = [];
  @Input() loading: boolean = true;

  @Output() orderBy = new EventEmitter<[string,string]>();

  currentOrders: any = {
    model: '',
    ram: '',
    hdd: '',
    location: '',
    price: ''
  }
  columns = [
    {label: 'Model', field: 'model'},
    {label: 'RAM', field: 'ram'},
    {label: 'HDD', field: 'hdd'},
    {label: 'Location', field: 'location'},
    {label: 'Price', field: 'price'}
  ];




  constructor(private http: HttpClient) {
  }

  // sortServers(sortBy: string): void {
  //   this.servers.sort((a, b) => a[sortBy] - b[sortBy]);
  // }

  orderByColumn(column: string) {
    //clear the other orders and set empty string
    Object.keys(this.currentOrders).forEach(key => {
      if (key !== column) {
        this.currentOrders[key] = '';
      }
    });

    //switch the order
    this.currentOrders[column] = this.currentOrders[column] === 'asc' ? 'desc' : 'asc';

    //send it to parent
    this.orderBy.emit([column, this.currentOrders[column]]);


  }
}
