import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersTableComponent } from './servers-table.component';

describe('ServersTableComponent', () => {
  let component: ServersTableComponent;
  let fixture: ComponentFixture<ServersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServersTableComponent]
    });
    fixture = TestBed.createComponent(ServersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
