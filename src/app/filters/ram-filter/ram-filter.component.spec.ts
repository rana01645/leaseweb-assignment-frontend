import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamFilterComponent } from './ram-filter.component';

describe('RamFilterComponent', () => {
  let component: RamFilterComponent;
  let fixture: ComponentFixture<RamFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamFilterComponent]
    });
    fixture = TestBed.createComponent(RamFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
