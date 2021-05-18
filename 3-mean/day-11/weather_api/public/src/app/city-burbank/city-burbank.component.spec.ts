import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBurbankComponent } from './city-burbank.component';

describe('CityBurbankComponent', () => {
  let component: CityBurbankComponent;
  let fixture: ComponentFixture<CityBurbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityBurbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityBurbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
