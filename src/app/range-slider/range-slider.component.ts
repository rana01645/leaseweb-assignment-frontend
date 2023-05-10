import { Component } from '@angular/core';
import {MatSliderDragEvent} from "@angular/material/slider";

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {
  formatLabel(value: number): string {
    if (value >= 1024) {
      return Math.round(value / 1024) + 'TB';
    }

    return value+"GB";
  }



  dragEnded($event: MatSliderDragEvent) {
    console.log($event.value);

  }
}
