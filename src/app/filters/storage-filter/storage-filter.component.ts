import {Component, EventEmitter, Output} from '@angular/core';
import {MatSliderDragEvent} from "@angular/material/slider";

@Component({
  selector: 'app-storage-filter',
  templateUrl: './storage-filter.component.html',
  styleUrls: ['./storage-filter.component.scss']
})
export class StorageFilterComponent {
   @Output() rangeChanged = new EventEmitter<{ min: number, max: number }>();
  minVal = 0;
  maxVal = 73728;

  min = 0;
  max = 73728;

  formatLabel(value: number): string {
    if (value >= 1024) {
      return Math.round(value / 1024) + 'TB';
    }

    return value + "GB";
  }


  onMinValueUpdated($event: MatSliderDragEvent) {
    this.min = $event.value;
    this.rangeChanged.emit({min: this.min, max: this.max});

  }

  onMaxValueUpdated($event: MatSliderDragEvent) {
    this.max = $event.value;
    this.rangeChanged.emit({min: this.min, max: this.max});
  }
}
