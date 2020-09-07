import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAgreementConfirmationComponent } from './sell-agreement-confirmation.component';

describe('SellAgreementConfirmationComponent', () => {
  let component: SellAgreementConfirmationComponent;
  let fixture: ComponentFixture<SellAgreementConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellAgreementConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellAgreementConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
