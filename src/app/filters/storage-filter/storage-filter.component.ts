import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-storage-filter',
  templateUrl: './storage-filter.component.html',
  styleUrls: ['./storage-filter.component.scss']
})
export class StorageFilterComponent {
  @Output() rangeChanged = new EventEmitter<{ min: string, max: string }>();

  onRangeChanged($event: { min: string; max: string }) {
    this.rangeChanged.emit($event);
  }
}
