import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissdComponent } from './missd.component';

describe('MissdComponent', () => {
  let component: MissdComponent;
  let fixture: ComponentFixture<MissdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
