import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-ram-filter',
  templateUrl: './ram-filter.component.html',
  styleUrls: ['./ram-filter.component.scss']
})
export class RamFilterComponent {
  @Input() ramOptions: any[] = [];
  @Output() selectionUpdated = new EventEmitter<any[]>();
  selectedRam: any[] = [];


  changeValue(option: any) {
    const index = this.selectedRam.indexOf(option);
    if (index > -1) {
      this.selectedRam.splice(index, 1);
    } else {
      this.selectedRam.push(option);
    }
    this.selectionUpdated.emit(this.selectedRam);

  }
}
