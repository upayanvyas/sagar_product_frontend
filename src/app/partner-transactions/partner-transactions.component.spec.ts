import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerTransactionsComponent } from './partner-transactions.component';

describe('PartnerTransactionsComponent', () => {
  let component: PartnerTransactionsComponent;
  let fixture: ComponentFixture<PartnerTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
