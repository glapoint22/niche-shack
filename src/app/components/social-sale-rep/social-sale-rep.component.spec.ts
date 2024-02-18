import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSaleRepComponent } from './social-sale-rep.component';

describe('SocialSaleRepComponent', () => {
  let component: SocialSaleRepComponent;
  let fixture: ComponentFixture<SocialSaleRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialSaleRepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialSaleRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
