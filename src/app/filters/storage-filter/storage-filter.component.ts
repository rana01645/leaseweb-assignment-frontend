import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-storage-filter',
  templateUrl: './storage-filter.component.html',
  styleUrls: ['./storage-filter.component.scss']
})
export class StorageFilterComponent {
  @Output() rangeChanged = new EventEmitter<{ min: number, max: number }>();

  onRangeChanged($event: { min: number; max: number }) {
    this.rangeChanged.emit($event);
  }
}
