import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingEntitiesComponent } from './billing-entities.component';

describe('BillingEntitiesComponent', () => {
  let component: BillingEntitiesComponent;
  let fixture: ComponentFixture<BillingEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
