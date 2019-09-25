import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappersComponent } from './rappers.component';

describe('RappersComponent', () => {
  let component: RappersComponent;
  let fixture: ComponentFixture<RappersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
