import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWashingtonComponent } from './city-washington.component';

describe('CityWashingtonComponent', () => {
  let component: CityWashingtonComponent;
  let fixture: ComponentFixture<CityWashingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWashingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWashingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
