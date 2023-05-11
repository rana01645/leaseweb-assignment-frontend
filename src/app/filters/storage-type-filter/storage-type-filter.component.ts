import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-storage-type-filter',
  templateUrl: './storage-type-filter.component.html',
  styleUrls: ['./storage-type-filter.component.scss']
})
export class StorageTypeFilterComponent {
  @Output() selectedType = new EventEmitter<string>();

   onChange(event: any) {
    this.selectedType.emit(event.value);
  }

}
