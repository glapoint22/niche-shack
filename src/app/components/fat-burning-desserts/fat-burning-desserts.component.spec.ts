import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatBurningDessertsComponent } from './fat-burning-desserts.component';

describe('FatBurningDessertsComponent', () => {
  let component: FatBurningDessertsComponent;
  let fixture: ComponentFixture<FatBurningDessertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatBurningDessertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FatBurningDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
