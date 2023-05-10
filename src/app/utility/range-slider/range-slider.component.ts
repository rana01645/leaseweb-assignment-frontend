import {Component, EventEmitter, Output} from '@angular/core';
import {MatSliderDragEvent} from "@angular/material/slider";

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {
  @Output() rangeChanged = new EventEmitter<{ min: string, max: string }>();
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
    this.rangeChanged.emit({min: this.formatLabel(this.min), max: this.formatLabel(this.max)});

  }

  onMaxValueUpdated($event: MatSliderDragEvent) {
    this.rangeChanged.emit({min: this.formatLabel(this.min), max: this.formatLabel(this.max)});
  }
}
