import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePieChartComponent } from './state-pie-chart.component';

describe('StatePieChartComponent', () => {
  let component: StatePieChartComponent;
  let fixture: ComponentFixture<StatePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
