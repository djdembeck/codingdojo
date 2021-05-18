import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySeattleComponent } from './city-seattle.component';

describe('CitySeattleComponent', () => {
  let component: CitySeattleComponent;
  let fixture: ComponentFixture<CitySeattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySeattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySeattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
