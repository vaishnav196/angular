import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpldetailsComponent } from './empldetails.component';

describe('EmpldetailsComponent', () => {
  let component: EmpldetailsComponent;
  let fixture: ComponentFixture<EmpldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpldetailsComponent]
    });
    fixture = TestBed.createComponent(EmpldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
