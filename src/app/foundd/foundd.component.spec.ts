import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounddComponent } from './foundd.component';

describe('FounddComponent', () => {
  let component: FounddComponent;
  let fixture: ComponentFixture<FounddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
