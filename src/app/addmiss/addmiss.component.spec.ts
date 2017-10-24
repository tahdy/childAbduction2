import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissComponent } from './addmiss.component';

describe('AddmissComponent', () => {
  let component: AddmissComponent;
  let fixture: ComponentFixture<AddmissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
