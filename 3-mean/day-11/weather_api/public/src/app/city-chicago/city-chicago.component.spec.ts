import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityChicagoComponent } from './city-chicago.component';

describe('CityChicagoComponent', () => {
  let component: CityChicagoComponent;
  let fixture: ComponentFixture<CityChicagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityChicagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
