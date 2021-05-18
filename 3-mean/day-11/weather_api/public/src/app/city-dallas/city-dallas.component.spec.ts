import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDallasComponent } from './city-dallas.component';

describe('CityDallasComponent', () => {
  let component: CityDallasComponent;
  let fixture: ComponentFixture<CityDallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
