import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ram-filter',
  templateUrl: './ram-filter.component.html',
  styleUrls: ['./ram-filter.component.scss']
})
export class RamFilterComponent {
  @Input() ramOptions: any[] = [];

}
