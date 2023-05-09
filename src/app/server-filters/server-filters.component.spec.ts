import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFiltersComponent } from './server-filters.component';

describe('ServerFiltersComponent', () => {
  let component: ServerFiltersComponent;
  let fixture: ComponentFixture<ServerFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerFiltersComponent]
    });
    fixture = TestBed.createComponent(ServerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
