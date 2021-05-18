import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySanjoseComponent } from './city-sanjose.component';

describe('CitySanjoseComponent', () => {
  let component: CitySanjoseComponent;
  let fixture: ComponentFixture<CitySanjoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySanjoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySanjoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
