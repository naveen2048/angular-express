import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashobardComponent } from './dashobard.component';

describe('DashobardComponent', () => {
  let component: DashobardComponent;
  let fixture: ComponentFixture<DashobardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashobardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashobardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
