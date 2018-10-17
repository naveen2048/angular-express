import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiveryComponent } from './delhivery.component';

describe('DelhiveryComponent', () => {
  let component: DelhiveryComponent;
  let fixture: ComponentFixture<DelhiveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelhiveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
