import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AramaxComponent } from './aramax.component';

describe('AramaxComponent', () => {
  let component: AramaxComponent;
  let fixture: ComponentFixture<AramaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AramaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AramaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
