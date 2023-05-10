import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageFilterComponent } from './storage-filter.component';

describe('StorageFilterComponent', () => {
  let component: StorageFilterComponent;
  let fixture: ComponentFixture<StorageFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorageFilterComponent]
    });
    fixture = TestBed.createComponent(StorageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
