import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAllComponent } from './cars-all.component';

describe('CarsAllComponent', () => {
  let component: CarsAllComponent;
  let fixture: ComponentFixture<CarsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
