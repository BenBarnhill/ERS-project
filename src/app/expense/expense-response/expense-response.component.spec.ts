import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseResponseComponent } from './expense-response.component';

describe('ExpenseResponseComponent', () => {
  let component: ExpenseResponseComponent;
  let fixture: ComponentFixture<ExpenseResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
