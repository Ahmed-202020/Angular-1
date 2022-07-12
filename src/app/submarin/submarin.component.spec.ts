import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarinComponent } from './submarin.component';

describe('SubmarinComponent', () => {
  let component: SubmarinComponent;
  let fixture: ComponentFixture<SubmarinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmarinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
