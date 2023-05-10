import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTypeFilterComponent } from './storage-type-filter.component';

describe('StorageTypeFilterComponent', () => {
  let component: StorageTypeFilterComponent;
  let fixture: ComponentFixture<StorageTypeFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorageTypeFilterComponent]
    });
    fixture = TestBed.createComponent(StorageTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
