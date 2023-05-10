import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.scss']
})
export class LocationFilterComponent {
  @Input() locations: any[] = [];

  @Output() selectedLocation = new EventEmitter<string>();

  onChange(event: any) {
    this.selectedLocation.emit(event.value);
  }

}
