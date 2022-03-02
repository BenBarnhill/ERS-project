import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementResponseComponent } from './reimbursement-response.component';

describe('ReimbursementResponseComponent', () => {
  let component: ReimbursementResponseComponent;
  let fixture: ComponentFixture<ReimbursementResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
