import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidOnlineWritingJobsComponent } from './paid-online-writing-jobs.component';

describe('PaidOnlineWritingJobsComponent', () => {
  let component: PaidOnlineWritingJobsComponent;
  let fixture: ComponentFixture<PaidOnlineWritingJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidOnlineWritingJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaidOnlineWritingJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
