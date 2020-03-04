import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HboComponent } from './hbo.component';

describe('HboComponent', () => {
  let component: HboComponent;
  let fixture: ComponentFixture<HboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
