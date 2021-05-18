import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDetailsComponent } from './single-details.component';

describe('SingleDetailsComponent', () => {
  let component: SingleDetailsComponent;
  let fixture: ComponentFixture<SingleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
